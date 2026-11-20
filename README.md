# Emiliarity — iridescent glass edition (v0.3)

A personal, minimal Android-friendly PWA with a seven-day repeating task cycle, Heap, and Rubble.

## Update your existing GitHub Pages app

1. **First, export a backup** in the current app if you have tasks: open Heap → Settings → Export backup. Keep the `.json` file safe.
2. In the GitHub repository hosting your existing Drift site, replace the contents at the publishing root with the **files from this folder**. Do not upload the ZIP itself or nest the app inside an extra folder. You can keep the GitHub repository named `drift`; the app shown on the phone is named **Emiliarity**.
3. Confirm these files are at the publishing root: `index.html`, `manifest.webmanifest`, `sw.js`, `icon.svg`, `icon-192.png`, `icon-512.png`. `README.md` is optional.
4. Commit changes. In **Settings → Pages**, keep **Deploy from a branch → main → /(root)**, unless you chose a different publishing folder.
5. Open your old Pages URL (for example `https://YOUR-USERNAME.github.io/drift/`). The URL stays the same if you did not rename the repository.
6. Close and reopen the installed web app to fetch the update; sometimes opening the site once in Chrome and reopening the app again is needed because of service-worker caching.
7. If Chrome still labels the home-screen app **Drift**, remove **only its launcher icon/installation**, then reinstall it from the same site. **Do not clear Chrome/site storage or uninstall with data deletion before confirming/exporting your backup.**

For a new installation, visit the live site in Android Chrome → ⋮ → **Add to Home screen** → **Install** (labels vary).

## Gestures

- **Horizontal swipe:** previous/next day, cycling Monday → Sunday → Monday.
- **Swipe down:** day → Heap → Rubble.
- **Swipe up:** Rubble → Heap → the current day.
- **Hold blank space for ~0.54 sec:** add a new task. This works on the blank area beneath tasks; avoid sliding your finger while holding.
- **Tap a task:** view its description, edit, move to a day/Heap, delay one day, or complete it.
- **Hold a task for ~0.64 sec:** complete it with a disappearing effect. Tap a scrap in Rubble to restore it.
- **Heap settings icon:** background palette, darkness, motion, sound, haptics, and JSON backups.
- On desktop, the arrow keys navigate days; press **N** to add a task.

## Data and rollover

- Retains the original `drift-v1` local storage key for compatibility with earlier Drift builds. Normal same-origin updates therefore preserve tasks without migration.
- Deletion counts as completion; Rubble stores up to the most recent 80 completed tasks.
- A 4 AM logical day boundary advances unfinished tasks from the previous day to the next. If the app is closed, it catches up when reopened. This is **not** an alarm or guaranteed background execution.
- The app code is public on GitHub Pages, but your task data stays in local browser storage and isn't uploaded or synced. Clearing browser/site data may erase it; back up periodically.
- Haptic vibration, browser audio, and scroll gestures can differ across Android devices and browsers; test on the actual phone.
