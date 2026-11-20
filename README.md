# Emiliarity v1.2 — interaction fixes

## Changes
- Easter egg illustrations are hidden when idle, and are revealed only through the space uncovered by dragging the screen.
- Add Task submits immediately when pressing Enter in its title field. Description remains optional, and duplicate submission is prevented.
- Settings, task details, and Add Task use the selected atmosphere from their first frame, with a shorter, blur-free animation.
- Todo and Heap mouse dragging now scrolls horizontally with the mouse position (no paging transitions); mouse-wheel/trackpad scrolling also moves sideways.
- All artwork and all three installed app icons remain unchanged.

## Deploy
1. Export a backup in the installed app before updating.
2. Unzip the package and upload **the files inside `emiliarity/`**, not the parent folder, to the root of your existing GitHub repository.
3. Commit and allow GitHub Pages to deploy, with branch `main` and `/(root)`.
4. Reopen the website and then the Android app. Avoid clearing site data; it contains your tasks.

## Testing
JavaScript syntax checked. Local browser navigation was blocked by the environment. Android touch and mouse drag effects should be tested on-device.
