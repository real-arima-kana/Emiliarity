# Drift v0.2 — glass edition

A minimal, standalone Android PWA built for a repeating seven-day cycle.

## Install through GitHub Pages

1. Create a free **public** GitHub repository named `drift`.
2. Upload **the contents of this folder**, not the enclosing `drift-app` folder or the ZIP. Include `index.html`, `sw.js`, `manifest.webmanifest`, `icon.svg`, `icon-192.png`, and `icon-512.png`.
3. Open **Settings → Pages → Build and deployment**. Choose **Deploy from a branch**, `main`, `/(root)`, then **Save**.
4. After deployment, visit `https://YOUR-USERNAME.github.io/drift/` in **Chrome on Android**.
5. Open Chrome's menu and choose **Install app** or **Add to Home screen**.

If updating an existing `drift` repo, replace the existing files with the v0.2 files, then reopen the app. The service worker will refresh cached assets when online; a second reopen may be needed.

## How it works

- Swipe left/right to switch days. At the first/last day, it wraps around.
- Pull down from a day to view the Heap; pull down from the Heap to enter the rubble. Swipe up to return.
- Hold blank space, or tap **Add a thought**, to create a title and optional description.
- Tap a task for its description, editing, next-day delay, scheduling, and a completion button.
- Hold a task for about 0.64 seconds to finish it: an animated fizzle and pop. Finished tasks are kept in rubble and can be restored by tapping them.
- In Preferences, choose a violet/ocean/ember background, adjust darkness, toggle sounds, haptics, and ambient motion, or export/import a JSON backup.
- At 4 AM **local device time**, remaining tasks from the previous day move into the next day's slot. The app catches up when reopened; this is a repeating cycle without calendar-dated individual tasks.

## Privacy and limitations

- Tasks and descriptions are saved in **localStorage on this device only**. They are not uploaded to GitHub or synced. Clearing site data can erase everything. Use **Export backup** before clearing browser storage or changing phones.
- GitHub Pages serves the publicly accessible **app code**, not the private task list stored on the phone. Do not hardcode secrets or task data into the published files.
- A PWA cannot reliably execute at exactly 4 AM while completely closed, so task rollover happens on the next app open/return.
- Haptics and sounds are best effort: `navigator.vibrate` is device/browser-dependent and sound begins after an interaction.
- Works offline after a successful initial visit and service-worker installation. Offline caching may vary by browser.
- Rubble retains the latest 80 completed tasks. Importing a backup replaces the current local data (confirmation required).
