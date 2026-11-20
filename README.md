# Emiliarity v0.9 — Smoothness Update

## Features
- Todo and Heap fill down into columns and scroll horizontally. An Android gesture fallback is included.
- Completed tasks in Heap auto-expire after a selectable interval: 1, 3, 7 (default), 14 or 30 days, or Never.
- Weekday horizontal swipes transition the entire pane, not just the task list.
- Completion uses a rounded swelling / popping animation with independently animated circular particles.
- Background image blurriness can be adjusted in Settings, alongside gradient overlay strength.
- Menu surfaces use gentler transparent gradients.
- Bottom Emilia artwork now has expanded transparent canvas for breathing room.
- **Top Emilia Easter egg preview is not included**. Approval is pending before integrating it.
- Your installed Emiliarity icons have **not been changed**.

## Publish
1. Export a backup from the existing app via Todo → Settings.
2. Extract this ZIP and upload **the contents of the `emiliarity` folder** to the root of your existing GitHub repository (replace same-named files).
3. Commit and check the GitHub Pages deployment.
4. Reload the live URL in Chrome, then reopen the installed app.
5. Do not clear site data without exporting a backup.

## Notes
- Completion/Heap retention is local to this device; expiration is applied when the app is rendered/reopened, not via a background service.
- The horizontal swipe fallback advances one approximate column if the browser didn't scroll it natively.
- JavaScript syntax checked. A headless Chromium test was attempted but did not successfully start in this environment; mobile touch interaction is still unverified.
