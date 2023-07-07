import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const otherActions = createActionGroup({
  source: 'Other',
  events: {
    'Do Something': props<{
      text: string;
    }>(),
  },
});
