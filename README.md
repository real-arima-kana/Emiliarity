# Emiliarity v0.5

Upload the **contents** of this folder into the root of your existing GitHub Pages repository. Keep your old URL and repo so local tasks stay on the same origin. Export a backup in Settings first.

## Changes
- Translucent clear-glass tasks without bubbles or drop shadows
- Completion (hold or check) moves a task to a layered physical-looking Heap pile
- Permanent deletion is separate and requires confirmation
- Completed tasks can be restored by tapping them in Heap
- Archive is for older recoverable deletions from previous builds only
- Upward swipes can exit Heap and Archive even if the pile is scrollable
- Expanded tasks open without the keyboard or redundant Task heading; tap text to edit
- More energetic completion burst effect
- Gradient colours can be customized or reset to default; slow background animation
- Identical Emilia icon artwork in both PNG sizes and matching embedded-image SVG

## Update
1. Open the old app: Heap → Settings → Export backup.
2. Upload all seven files from this folder (not the folder itself) to the repository root and commit.
3. Check Actions for GitHub Pages deployment.
4. Reload the live page in Android Chrome. The installed version should update once its service worker refreshes.
5. Do not clear site storage: that would erase locally saved tasks.

## Notes
The pile uses deterministic overlapping positions and CSS drop animation, not a true physics engine. Real Android touch behavior and visual performance still need on-device testing.
