# Emiliarity v1.8 — Minimal polish

This update retains the task data format and artwork of v1.7.

## Changes

- Add Task is a single translucent popup with just two editable boxes (title and optional description), plus a small confirm control. The unnecessary inner frame and close X are gone. Tap outside to dismiss.
- Settings uses the same understated tinted glass surface, with no extra close X; tap outside or press Escape to dismiss.
- Added subtle matching light/shade gradients at the edges of vertical panes for smoother visual continuity as you swipe through Heap, Todo, and weekdays.
- Removed a duplicate `choose` button ID in the task details view.
- Custom gradient settings are retained when temporarily switching to another atmosphere.
- Service worker version bumped to ensure the new files update cleanly.

No changes to the two Emilia image files or the three app icons.

## Deployment

1. Export a backup from Settings before replacing app files.
2. Upload every file in this directory to the repository root hosting your GitHub Pages site.
3. Commit the files to the published branch.
4. Reload the live app after it deploys. If the installed PWA retains the old interface, fully close and relaunch it once.

Note: The local Chromium smoke tests covered opening/closing Settings, creating a title-only task with Enter, touching a task to open its editor, and dismissing by tapping outside. Gesture transitions still need testing on a real Android device.
