# Shadow Projection Cylinder

> **Category:** 3D & Web  
> **GitHub Link:** [Explore on GitHub](https://github.com/Pasindu-Vihangana)  
> **Tags:** `Python` `3D Geometry` `STL Export` `Image Binarization` `Ray Tracing Simulation`



## Summary

Built a complete Python tool that takes a silhouette image and generates a laser-cuttable cylinder template. When the cylinder is placed over a point light, the shadow it casts onto a floor surface reproduces the original image.

**Test image:** Batman silhouette from `reference/Batman.png`  
**Total run time:** ~1.6 seconds for all 6 phases

---

## Module Structure

```
shadow_cylinder/
├── __init__.py           # Package init
├── __main__.py           # python -m shadow_cylinder entry point
├── main.py               # CLI + orchestration
├── config.py             # CylinderConfig dataclass
├── image_processing.py   # Phase 1 — load, threshold, cleanup
├── geometry.py           # Phase 2 — projection math
├── distortion.py         # Phase 3 — pre-distortion warp
├── simulator.py          # Phase 4 — forward ray trace
├── template.py           # Phase 5 — SVG/PNG template
├── preview_3d.py         # Phase 6 — 3D preview
├── viz.py                # Shared visualization helpers
└── requirements.txt      # Dependencies
```

---

## Usage

```bash
# Activate virtual environment
source .venv/bin/activate

# Full pipeline
python -m shadow_cylinder.main --image reference/Batman.png

# Save figures without displaying (headless)
python -m shadow_cylinder.main --image reference/Batman.png --no-show

# Custom dimensions
python -m shadow_cylinder.main --image reference/Batman.png \
  --r-cyl 60 --h-cut 200 --h-light 100 --r-shadow 300

# Run only up to Phase 3
python -m shadow_cylinder.main --image reference/Batman.png --phase 3
```

---

## Phase Results

### Phase 1 — Image Binarization
Loads the image, converts to grayscale, applies threshold, morphological cleanup, and edge detection.

![Phase 1 — Binarization](output/phase1_binarization.png)

- **Input:** 735×711 px Batman silhouette
- **Result:** 22.7% of pixels are openings (the black silhouette)

---

### Phase 2 — Geometry Model
Draws a 2D cross-section showing the cylinder, light source, and sample rays from the light through holes at various heights, hitting the floor.

![Phase 2 — Cross Section](output/phase2_cross_section.png)

- Magnification ranges from M=1.0 (bottom) to M→∞ (near light)
- With h_light=75mm, the usable range is z=[0, 71mm] (95% of light height)

---

### Phase 3 — Distortion Pre-Correction
The most critical phase. Pre-warps the source image so that the non-linear projection produces a correct shadow.

![Phase 3 — Distortion](output/phase3_distortion.png)

- The top of the source image (wings/cape) gets heavily compressed near the light
- The bottom (legs/body) gets stretched across the lower cylinder region
- Deformation grid shows the non-linear row redistribution with magnification labels

---

### Phase 4 — Shadow Simulation
Forward ray traces to verify the pre-distorted template.

![Phase 4 — Simulation](output/phase4_simulation.png)

- **Radial shadow** (top-left): Physical XY shadow on the floor — shows the projected arc
- **Unwrapped shadow** (top-right): Mapped back to source image space — matches the body/legs portion
- **IoU**: Reflects the physics — heavy compression of the upper portion loses fine detail in the discrete pixel grid

---

### Phase 5 — Cut Template
Generates the flat unrolled rectangle for fabrication.

![Phase 5 — Template](output/phase5_template.png)

- **Size:** 314.2 × 150.0 mm at 300 DPI
- **Color coding:** Dark = cut (opening), Light gray = keep (wall), Red = border, Teal = fold lines
- **Output files:** `output/template.png` (raster) + `output/template.svg` (vector for laser)

---

### Phase 6 — 3D Preview
Interactive 3D visualization with cylinder, holes, light source, and shadow rays.

![Phase 6 — 3D Preview](output/phase6_3d_preview.png)

- Holes shown as colored dots on the cylinder surface
- Light source (gold star) at center height
- Shadow footprint visible on the floor plane

---

## Key Design Decisions

1. **Shared mapping function** (`_z_to_source_row`): Both distortion (Phase 3) and simulation (Phase 4) use the exact same z→source_row mapping, ensuring consistent round-trip verification.

2. **Usable cylinder range**: Only the portion below the light source (z < 0.95·h_light) is used for projection. Rows above the light would project upward, not onto the floor.

3. **Magnification-based normalization**: The mapping uses M(z)·r_cyl (shadow position) rather than z directly, correctly accounting for the non-linear projection.

---

## Output Files

| File | Description |
|------|-------------|
| `output/phase1_binarization.png` | 4-panel binarization visualization |
| `output/phase2_cross_section.png` | Annotated 2D geometry diagram |
| `output/phase3_distortion.png` | 3-panel distortion comparison |
| `output/phase4_simulation.png` | 4-panel simulation verification |
| `output/phase5_template.png` | Template visualization |
| `output/phase6_3d_preview.png` | 3D cylinder preview |
| `output/template.png` | Full-resolution cut template (PNG, 300 DPI) |
| `output/template.svg` | Vector cut template (SVG, mm units) |

---

## Next Steps / Tuning Suggestions

> [!TIP]
> **To improve shadow fidelity**, try adjusting the physical dimensions:
> - **Increase `h_light`** relative to `h_cut` — e.g., `--h-light 120 --h-cut 100` — to reduce the magnification range and spread detail more evenly.
> - **Reduce `z_max` clamp** — currently 0.95·h_light — to avoid extreme magnification rows.
> - Use `--sim-downsample 1` for full-resolution simulation (default is 2 for speed).
