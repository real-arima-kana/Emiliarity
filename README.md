# Emiliarity v2.2 — Calendar

A minimal Calendar pane has been added to the vertical stack:

**Heap → Calendar → Todo → Monday–Sunday**

- Calendar is a simple chronological task list, not a month grid.
- Long-press empty space in Calendar to add a dated task. Enter a title, optional description, date, and time. Enter in the title submits as usual.
- Dated tasks are displayed with a small date/time stamp in the bottom-right corner of their existing bubble.
- Scheduled tasks also appear automatically on their matching weekday **in the corresponding calendar week**. Future weeks appear when that week arrives. Calendar itself retains all unfinished dated tasks, including past dates, until completed or deleted.
- Tap a scheduled task on either screen to edit its title, description, date, or time. A task is a single record, not two independently managed copies.
- Completing a scheduled task removes it from both Calendar and the weekday view and moves it to completed Heap.
- Regular Todo and weekday tasks retain their existing behaviour, including the app's 4 AM day rollover.
- The immediate, optional notification action remains unchanged. Dates and times do not schedule notifications or alarms.
- Backups now include dated tasks. Older backups without calendar tasks remain importable.

## Updating

1. Export a backup from the currently installed app.
2. Upload all files inside this folder to the root of the existing GitHub Pages repository, replacing older files.
3. Commit and refresh the installed app once the update has deployed.

App icons, Emilia illustrations, gradient presets, fullscreen display setting and prior task styles are preserved.
