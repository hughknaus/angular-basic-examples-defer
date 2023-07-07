import { Component, OnInit } from '@angular/core';
import { defer, of } from 'rxjs';
import { OtherComponent } from './other.component';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  name = 'Angular Basic Examples -- See Console';

  constructor() {}

  // See: https://netbasal.com/getting-to-know-the-defer-observable-in-rxjs-a16f092d8c09
  public ngOnInit() {
    this.funcWithoutDefer();
    this.funcWithDefer();
  }

  /* 
    Without defer the problem is that both subscribers share the same 
    lexical scope, and therefore reference the same randNum variable.
  */
  public funcWithoutDefer() {
    const randNum = of(Math.random());
    randNum.subscribe((x) =>
      console.log(`funcWithoutDefer randNum first subscription... `, x)
    );
    randNum.subscribe((x) =>
      console.log(`funcWithoutDefer randNum second subscription... `, x)
    );
  }

  /* 
    With defer, this approach (and thanks to JS closures), each subscriber 
    gets its own lexical scope.
  */
  public funcWithDefer() {
    const randNum = defer(() => of(Math.random()));
    randNum.subscribe((x) =>
      console.log(`funcWithDefer randNum first subscription... `, x)
    );
    randNum.subscribe((x) =>
      console.log(`funcWithDefer randNum second subscription... `, x)
    );
  }
}
