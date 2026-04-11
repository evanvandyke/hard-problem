#!/usr/bin/env python3
"""
Render Hard Problem at fixed humanize values.

Re-executes the original hard_problem.py script with:
  - humanize(bar_num) monkey-patched to return a constant H
  - output path rewritten to a stems folder
  - np.random seeded for deterministic output

Produces WAV stems, then encodes to MP3 at 128k for web delivery.
"""

import os
import re
import subprocess
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
SRC_PY = REPO / "constructive-interference-hard-problem-media" / "hard_problem.py"
STEMS_DIR = REPO / "public" / "media" / "humanize-stems"
STEMS_DIR.mkdir(parents=True, exist_ok=True)

H_VALUES = [0.0, 0.25, 0.5, 0.75, 1.0]

orig_code = SRC_PY.read_text()

# Rewrite the humanize function to return a module-level constant.
# Original:
#   def humanize(bar_num):
#       """Returns 0.0 to 1.0 over the course of the song"""
#       return min(1.0, bar_num / (total_bars * 0.85))
patched_humanize = (
    "def humanize(bar_num):\n"
    '    """Monkey-patched to return a fixed value."""\n'
    "    return __FIXED_H__\n"
)
orig_fn_pattern = re.compile(
    r"def humanize\(bar_num\):\s*\n\s*\"\"\"Returns 0\.0 to 1\.0 over the course of the song\"\"\"\s*\n\s*return min\(1\.0, bar_num / \(total_bars \* 0\.85\)\)\n",
)
if not orig_fn_pattern.search(orig_code):
    print("ERROR: could not find humanize() definition to patch", file=sys.stderr)
    sys.exit(1)

code_with_patch = orig_fn_pattern.sub(patched_humanize, orig_code)

# Make output path configurable via env var and avoid the /mnt/user-data path
code_with_patch = code_with_patch.replace(
    '"/mnt/user-data/outputs/hard_problem.wav"',
    "os.environ['HP_OUT_WAV']",
)
# Ensure os is imported at the top (it's used elsewhere? hard_problem.py doesn't import os)
if "\nimport os\n" not in code_with_patch:
    code_with_patch = "import os\n" + code_with_patch

def render_one(h: float) -> Path:
    tag = f"h{int(round(h * 100)):03d}"
    wav_path = STEMS_DIR / f"hp-{tag}.wav"
    code = code_with_patch.replace("__FIXED_H__", repr(float(h)))
    # Seed numpy deterministically per-h so stems are stable across runs
    seed_line = f"\nimport numpy as _np_seed\n_np_seed.random.seed(42 + int({h}*1000))\n"
    # Insert after the numpy import
    code = code.replace("import numpy as np\n", "import numpy as np\n" + seed_line, 1)

    env = os.environ.copy()
    env["HP_OUT_WAV"] = str(wav_path)

    print(f"  Rendering h={h:.2f} → {wav_path.name}")
    proc = subprocess.run(
        [sys.executable, "-c", code],
        env=env,
        capture_output=True,
        text=True,
    )
    if proc.returncode != 0:
        print("STDOUT:", proc.stdout)
        print("STDERR:", proc.stderr, file=sys.stderr)
        raise SystemExit(f"render failed for h={h}")
    return wav_path


def to_mp3(wav_path: Path) -> Path:
    mp3_path = wav_path.with_suffix(".mp3")
    print(f"  Encoding {wav_path.name} → {mp3_path.name}")
    subprocess.run(
        [
            "ffmpeg",
            "-y",
            "-loglevel",
            "error",
            "-i",
            str(wav_path),
            "-b:a",
            "128k",
            "-ar",
            "44100",
            str(mp3_path),
        ],
        check=True,
    )
    wav_path.unlink(missing_ok=True)
    return mp3_path


def main() -> None:
    print(f"Rendering {len(H_VALUES)} humanize stems from {SRC_PY.name}")
    for h in H_VALUES:
        wav = render_one(h)
        to_mp3(wav)
    print("\nDone. Stems:")
    for p in sorted(STEMS_DIR.glob("*.mp3")):
        size_kb = p.stat().st_size / 1024
        print(f"  {p.name}  ({size_kb:.0f} KB)")


if __name__ == "__main__":
    main()
