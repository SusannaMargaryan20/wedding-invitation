# First-dance animation update

The first-dance section now uses 8 generated dance poses instead of one static ballroom image.

- Frames: `assets/images/dance/frame-01.webp` … `frame-08.webp`
- Infinite loop while the dance section is visible
- Cross-fade every 620 ms
- Subtle camera drift and warm-light pulse
- Frames are preloaded to avoid blank flashes
- Animation pauses when the section leaves the viewport

To change speed, edit in `script.js`:

    const DANCE_FRAME_MS = 620;

Lower = faster, higher = slower.
