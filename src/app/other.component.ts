import { Component, OnDestroy, OnInit } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { State, Store } from '@ngrx/store';
import { Subject, takeUntil, tap } from 'rxjs';
import { otherActions } from './other.actions';

@Component({
  selector: 'my-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css'],
})
export class OtherComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject<boolean>();

  constructor(private actions$: Actions, private store: Store) {
    console.log(`OtherComponent::ctor`);
  }

  ngOnInit(): void {
    console.log(`OtherComponent::ngOnInit`);

    let myObs$ = this.actions$.pipe(
      ofType(otherActions.doSomething),
      tap((x) => console.log(`dispatch caught:`, x)),
      takeUntil(this.destroyed$)
    );

    this.store.dispatch(otherActions.doSomething({ text: 'beforeSubscribe' }));

    myObs$.subscribe();

    this.store.dispatch(otherActions.doSomething({ text: 'afterSubscribe' }));
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
