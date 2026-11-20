# Emiliarity v0.7

A minimalist, touch-first, offline-friendly weekly task app for Android (GitHub Pages PWA).

## Changes in this version
- All three Emilia app icon files are unchanged from v0.6.
- Clear, transparent task surfaces (no frosted-glass blur) and safer margins/animations.
- Heap cards form a compact contained stack, instead of overflowing the sides.
- Settings and add-task surfaces use the default iridescent atmosphere rather than the older Moon colours.
- New simple dark and simple light atmospheres, alongside Iridescent, Moon and Blue.
- Three native colour-wheel pickers for custom gradient colours.
- Import a custom background image from your device, with a translucency slider for the gradient layer above it and a reset option.
- A small Easter egg appears while you drag from the bottom edge of the weekday screen and hold, and recedes when you release.

## Update your live app
1. Export a backup from Settings in the current app.
2. Extract this ZIP and upload all the files INSIDE the `emiliarity` folder to the ROOT of your existing GitHub Pages repository.
3. Commit the files; keep Pages on `main` + `/(root)`.
4. Once it deploys, refresh the live URL in Chrome, then reopen the installed Emiliarity app.
5. If icons are cached, try closing and reopening the installed app. Avoid clearing site data without a backup.

## Important
- Data is stored in your browser's local storage. This build keeps the existing `drift-v1` storage key to preserve tasks across versions.
- Uploaded background images are compressed and stored locally; they are not uploaded to GitHub or a server. Browser storage limits apply.
- Long-press haptics and gesture behavior depend on device/browser support.
- The Easter egg uses the existing 512px Emilia icon asset, not a modified icon.
- Browser interactions must be tested on your actual Android device.
