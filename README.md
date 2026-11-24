# Emiliarity v2.4 — Calendar recurrence and interaction polish

Emiliarity remains a minimal, fullscreen, offline-first personal task app. The stack is **Heap → Calendar → Todo → Monday–Sunday**.

## What changed

- Calendar titles are centred vertically, with the small date/time stamp retained at the lower-right.
- Brief task holds no longer trigger the temporary shake/flash; completing a long hold still produces the bubble-pop animation.
- Calendar creation and editing add one small, optional recurrence field, without a dropdown chevron.
- Repeat choices: **Does not repeat**, **Every day**, **Every week**, **Every 2 weeks**, **Every month**, and **Every year**.
- Ordinary weekday tasks, presets, customisation controls, icons and Emilia artwork are unchanged.

## How recurrence works

- Each series has **one outstanding occurrence** in Calendar. During its scheduled week, the same task also appears on the matching weekday.
- Completing an occurrence saves that instance into Heap, and moves the series to its **next future date**. Missed dates do not generate a backlog.
- Restoring a completed recurring occurrence creates a one-off scheduled task; it does **not** rewind or alter the remaining series.
- Editing a due date or using **Next day** changes the starting date for future repetitions.
- Moving a Calendar task to Todo or an ordinary weekday removes its recurrence; moving an ordinary task to Calendar starts with **Does not repeat**.
- Monthly dates preserve their intended day when possible (Jan 31 → Feb 28/29 → Mar 31). Yearly February 29 dates are clamped in non-leap years.
- Overdue Calendar tasks stay visible until completed, rescheduled or deleted. Calendar scheduling does not create background reminders. The bell action still posts an **immediate** notification only.

## Compatibility, backup and deployment

- The existing `drift-v1` local storage key is unchanged. Older Calendar tasks automatically default to non-repeating.
- Backups now use `version: 8`; exports include recurrence and month-day anchor data, and imports remain compatible with older backups.
- Completed occurrences are independent, non-repeating records, preserving Heap undo and expiry behaviour.
- The service-worker cache is refreshed for this release. Once GitHub Pages deploys, fully close and reopen the installed app to pick up the new version.
- Export a backup before clearing storage or uninstalling the app. All task data remains on the device.
