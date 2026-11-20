# Emiliarity v0.6

A minimal tactile weekly PWA for Android, hosted on GitHub Pages.

## New in v0.6
- The seven weekday lists are unchanged.
- Swipe down once to **Todo**, a regular list for tasks not assigned to a weekday (previously named Heap).
- Swipe down again to **Heap**, the layered pile of completed tasks (replaces the old Archive/Rubble view).
- Long-hold on a task completes it and adds it to Heap. The separate delete icon still permanently deletes a task after confirmation.
- Tap completed tasks in Heap to restore them to their original day, or delete them permanently.
- Legacy removed tasks are shown in Heap and may be restored.
- Task creation now expands and fades into place rather than sliding up; opening it gives an extra haptic pattern on supported Android phones.
- More colourful, bubble-like translucent task cards and a more visible animated pastel gradient.
- Existing background colour customization and reset remain in settings under Todo.
- All app icon files are preserved unchanged from v0.5: icon.svg, icon-192.png, icon-512.png.

## Update your existing GitHub Pages site
1. Export a backup from your existing Emiliarity settings first.
2. Extract this zip, then upload the files *inside* the emiliarity folder to the root of your GitHub repository.
3. Commit the changes and confirm Pages deployment is green under Actions.
4. Open your live URL in Android Chrome to refresh the service worker.
5. Reopen your home-screen app. Do not clear browser/site data without a backup.

Your tasks remain in localStorage under the original key (`drift-v1`) for compatibility.

## Limitations
Pile cards are layered and animated, not simulated with a full physics engine. Chrome vibration support varies by device. Physical Android touch tests remain necessary.
