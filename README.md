# Emiliarity v0.8

A minimal Android progressive web app for a seven-day to-do cycle.

## What's new

- Press and hold a task to make it quiver, swell, and burst into particles on completion. This replaces the straight-line hold-progress fill.
- Todo (general unscheduled tasks) and Heap (completed tasks) now fill each column from top to bottom before continuing in a new column to the right. Swipe sideways to browse additional columns.
- The Easter egg only activates on a weekday when its task list **does not overflow**: start near the bottom of the screen and drag upward while holding. The whole app surface lifts to reveal a compact, transparent line-art portrait; release to close it.
- The separate Emilia artwork used in the Easter egg is `emilia-peek.png`. It does **not** replace or modify any installed app icons.

## Updating from v0.7

1. Back up existing tasks using Todo → Settings → Export backup.
2. Extract the ZIP and upload all files inside the `emiliarity` folder to the **root** of your existing GitHub repository.
3. Commit the file changes and let GitHub Pages deploy.
4. Reopen the installed app. If it still serves a cached page, open its live GitHub Pages address in Chrome and reload.
5. Avoid clearing site storage because that can erase local tasks.

## Included files

`index.html`, `manifest.webmanifest`, `sw.js`, `icon.svg`, `icon-192.png`, `icon-512.png`, `emilia-peek.png`, and `README.md`.

The three app icon files are unchanged from v0.7. The new portrait has transparency; it is used only for the Easter egg.

Task data remains under the existing `drift-v1` local storage key for compatibility.

## Test notes

The JavaScript passed syntax checking, but this environment blocked the local browser smoke test. Check touch behavior, column scrolling, and the bottom-edge Easter egg on your Android phone.
