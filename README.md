# Emiliarity v2.0 — Fullscreen Android PWA

This build is identical to v1.9 except for installed-app display mode:
- Android PWA manifest requests fullscreen display, hiding system status and navigation bars when supported.
- All existing tasks, app styling, settings, Emilia artwork and icon files are unchanged.
- Service worker cache revision updated so installed clients fetch the new manifest.

## Install
1. Export a backup from the existing app, as a precaution.
2. Upload all files in this folder to your GitHub Pages repository root and commit.
3. After deployment, open the website in Chrome, refresh it, then **remove the previous Emiliarity home-screen installation and install it again** if fullscreen mode does not activate. Existing app shortcuts may retain the old display mode.
4. Android system bars can be revealed temporarily by swiping from the edge. Depending on Android, fullscreen can affect access to system navigation; use edge gestures to exit.

## Notes
Changing a PWA's manifest display mode may require reinstalling the app. Back up tasks before uninstalling: some Android setups may remove app-local storage during uninstallation.
