# Emiliarity v1.1 — Responsiveness polish

Built on v1.0, preserving task storage and the app’s three icons.

## What changed

- Top Emilia is now genuinely transparent purple line art, and is revealed behind the moving Heap screen rather than fading in.
- Bottom Emilia is the exact original artwork and is revealed behind the lifting weekday screen.
- Completing a task now creates a fast, rounded bubble ghost and independent particles outside the clipped list panel.
- Faster task holds and immediate touch-up activation for opening task details.
- Faster weekday and vertical transitions, and native horizontal scrolling without snap/smooth-scroll interference.
- The upper Easter egg only responds to a deliberate pull beginning near the top of the Heap screen.

## Update an existing GitHub Pages installation

1. Export a backup before replacing app files.
2. Extract the ZIP, upload its files into the root of the existing GitHub repository, and commit.
3. Wait for GitHub Pages to deploy, then reload from Chrome.
4. Don't clear site data; locally saved tasks remain on the same website origin.

## Validation

The JavaScript passes Node.js syntax checking and the ZIP can be integrity-checked. Physical Android gesture responsiveness and haptic timing must still be tested on-device.
