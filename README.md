# Emiliarity v2.1 — Final refinements

Built from v2.0 Fullscreen.

- Tapping outside the new-task popup saves a task when the title is non-empty; with no title, it dismisses without creating a blank task. Escape still cancels.
- Weekday and vertical swipe release thresholds are slightly lower (55→45px and 70→58px); upper-list horizontal threshold 48→41px.
- Four additional atmospheres: Forest (deep botanical green), Sunset (warm blush), Pure black (solid #000000), Pure white (solid #ffffff). Earlier atmospheres and custom gradients are preserved.
- In pure black/white atmospheres, the imported wallpaper is temporarily hidden, not deleted. Switching themes restores it.
- Fullscreen manifest, artwork, icons, task storage format and all unrelated interactions remain unchanged.

## Install
Export a task backup before replacing the contents of the deployed GitHub Pages repository with the files in this folder. Commit and refresh the installed app.
