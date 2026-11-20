# Emiliarity v1.3 — Stacked Emilia + Swipe Fix

## Changes
- Emilia illustrations now belong to the vertical app stack itself. Pull **down** beyond Heap to reveal top Emilia, or **up** beyond the weekdays to reveal bottom Emilia. The original artwork remains unchanged.
- Reveal movement follows finger displacement and snaps gently back on release, without free-floating or permanently visible overlays.
- Todo and Heap use pixel-by-pixel finger-driven horizontal scrolling, bypassing unreliable native pan routing. Mouse drag and wheel support remain.
- All existing tasks, settings, backgrounds and image/icon assets remain compatible.

## Deploy
1. Back up tasks in Settings → Export backup.
2. Unzip and upload **all** files from this directory into the root of the existing GitHub Pages repository, replacing old files.
3. Commit and wait for deployment. Refresh the live site in Chrome once, then reopen the installed app.
4. Do not clear site data without backing up tasks first.

## Notes
- Vertical pull reveals only happen on the outermost screens: bottom of a weekday screen with no list overflow, or down beyond Heap's upper edge.
- Sideways swipe in Todo/Heap is effective when enough tasks exist to fill multiple columns.
- Android touch interactions have not been physically tested; please test on your phone.
