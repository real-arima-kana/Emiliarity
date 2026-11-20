# Emiliarity v1.0 — Emilia Easter Eggs

Built on v0.9, with two artwork changes only:

- **Bottom Easter egg:** restored the exact original `emilia-peek.png` from v0.8, without extending or editing it.
- **Top Easter egg:** added the approved sideways-glancing, gently frustrated Emilia line art as `emilia-top.png`. When viewing Heap (above Todo), drag down and hold to lift the app and reveal her. Release to close.

All three app icon files (`icon.svg`, `icon-192.png`, `icon-512.png`) are unchanged. All other app behaviour remains as in v0.9.

## Deployment

1. Export a backup from the current installed app.
2. Extract the ZIP and upload all files inside `emiliarity/` to the root of the existing GitHub Pages repository, including the **new `emilia-top.png`**.
3. Commit the changes, wait for Pages deployment and reload your live app.
4. Avoid clearing your Chrome site data because it stores your tasks.

The app stores tasks under the original local-storage key so they should remain intact on the same GitHub Pages origin.
