# Emiliarity v1.9

A small refinement to task editing, weekday awareness, and Android notifications.

## Changes
- Edit Task matches the minimal two-field Add Task surface with no visible X, placeholders or heading; tap outside to close and save.
- Existing task actions remain as small icons: next day, move, notification, complete and delete.
- Bell icon: show the task title and optional description as a regular, immediately dismissible Android system notification. Notifications require HTTPS and explicit permission, and are supported by compatible browsers, such as Android Chrome. This is an immediate notification, **not a timed/background reminder**. Swiping it away doesn't affect the task.
- Today is underlined in the day heading, and the app opens on the current day, respecting the existing 4 AM rollover.
- Both Emilia images and all three app icons remain unchanged.

## Update
1. Export a backup in Settings.
2. Replace files at the GitHub Pages repository root with the contents of this folder.
3. Commit, allow GitHub Pages to deploy and refresh/reopen the app.
4. To try notifications, open an existing task and tap the bell icon. Grant notification permission if Android asks.

## Notes
No account, server, or push-notification backend is added. The notification appears when you tap the bell while Emiliarity is open. Depending on your Android notification settings, it may appear silently or as a normal notification. Browser and Android settings control permission and presentation.
