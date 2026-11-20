# Emiliarity v0.4

Minimal liquid-glass weekly todo app for Android via GitHub Pages.

## What's new in v0.4
- List scrolling now only appears when content actually overflows.
- Top and bottom fade indicators appear when more tasks exist off-screen.
- Task cards use a more colourful liquid-glass badge.
- Task detail actions use icon buttons.
- Task title and description can be edited directly by tapping into them once the task is opened.
- Heap is darker and Rubble is darker still.
- Vertical transitions now move between stacked panels instead of swapping views abruptly.
- App icon updated to the new Emiliarity look.

## Files to upload
Upload these files to the root of your GitHub repository:
- `index.html`
- `manifest.webmanifest`
- `sw.js`
- `icon.svg`
- `icon-192.png`
- `icon-512.png`
- `README.md`

## Updating an existing live install
1. Export a backup from the existing app first.
2. Replace the files in your GitHub repo with the new ones.
3. Commit the changes.
4. Wait for GitHub Pages to redeploy.
5. Open the live site once in Chrome.
6. If the home-screen icon does not refresh, remove the installed shortcut/app and reinstall it from Chrome.
7. Do not clear site data unless you have already exported a backup.

## Notes
- Existing tasks should be preserved because the local storage key remains compatible.
- The app is still a Progressive Web App, not an APK.
- Sounds and haptics depend on Android/Chrome support.
