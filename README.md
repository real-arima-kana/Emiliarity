# Emiliarity v2.3 — Calendar integration and atmosphere restoration

Emiliarity remains a minimal, fullscreen, offline-first personal task app. The stack is **Heap → Calendar → Todo → Monday–Sunday**.

## What changed in v2.3

- Restored the **Forest**, **Sunset**, **Pure black**, and **Pure white** atmospheres from v2.1.
- Added **Emilia**, a soft lavender, silver-white, violet and ice-blue atmosphere.
- Preset themes remain selected on reopen even when saved custom gradient colours exist. Custom colours are only used when **Custom** is selected.
- Pure black and pure white use flat backgrounds without animated white streaks when no personal background image is present.
- Scheduled task bubbles share the usual task-bubble minimum height and padding, with a small date/time label in the lower-right.
- Scheduled tasks are shown **before** undated tasks on their weekday view.
- Fixed **Next day** on scheduled tasks. The saved date now changes correctly without being overwritten when the editor closes.
- Existing weekly/Todo tasks can be moved into Calendar via the move control, then edited to choose a date and time.
- Existing scheduled tasks can be moved back to a weekday or Todo from the move control; simply opening that control no longer silently removes their date.
- The Calendar task form now validates date/time before locking the submit action.
- Overdue tasks stay in Calendar, receive a subtle **Overdue** date label, and can be moved to the next day using the usual task action. Overdue appearance refreshes while the app is open.

## Why overdue tasks do not automatically enter Heap

Heap is the **completed** area. An expired deadline doesn't mean the task is complete, so moving an overdue task into Heap would misrepresent its state and expose it to Heap's automatic decay/deletion. Instead, overdue items remain visible in Calendar until completed, deleted or rescheduled.

## Compatibility and operation

- Uses the existing `drift-v1` device storage format; existing tasks, Calendar dates, custom wallpapers and settings remain compatible.
- Backup export/import includes scheduled tasks.
- Calendar tasks are separate records shown in Calendar and mirrored into their matching weekday in the current week, not duplicated tasks.
- Weekday task rollover at 4 AM does not shift scheduled calendar dates.
- Completing a scheduled task moves it to Heap; restoring it recovers its scheduled date and time.
- Notifications remain the user-triggered, immediate kind; a scheduled date does not create an automatic alarm.

## Update

The PWA cache key has been advanced so an installed app refreshes. Your local task data stays on your own device. Export a backup in Settings before major device/browser changes.
