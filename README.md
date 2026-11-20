# Emiliarity v1.7

Minimal interface and input reliability refinement.

- Task taps now open reliably on Android touch and desktop mouse. The modal no longer closes from the same touch's delayed click; hold-to-complete is preserved.
- Add Task uses one quiet rounded container with a smaller empty title field and a larger empty optional description field. No placeholder text; Enter in the title creates the task.
- Settings and Add Task use a consistent deep black-and-white appearance, independently of the chosen background atmosphere.
- Settings sliders use thinner neutral tracks and small round white thumbs.
- Todo and Heap cards now soften at the actual scrolling edge when more content extends horizontally, rather than ending abruptly or applying a pane-wide fade.
- The original Emilia illustrations and app icons are unchanged.
- Task data and backup format remain compatible with earlier releases.

## Updating

1. Export a backup from the app in Settings.
2. Copy the files from the `emiliarity` folder into your existing GitHub Pages repository root.
3. Commit, let GitHub Pages deploy, then refresh the app.
