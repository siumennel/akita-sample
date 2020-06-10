import { skip } from 'rxjs/operators';

import { Component, ElementRef, Output } from '@angular/core';

import { CounterState, counterStateFactory } from './counter.state';

@Component({
  selector: 'counter',
  template: `
    {{ counter$ | async }}
    <button (click)="increment()">Increment</button>
  `,
  providers: [{
    provide: CounterState,
    useFactory: counterStateFactory,
    deps: [ElementRef]
  }]
})
export class CounterComponent {
  counter$ = this.state.query.select('counter');
  @Output() update = this.counter$.pipe(skip(1));

  constructor(
    private state: CounterState,
  ) { }

  increment() {
    this.state.store.update(({ counter }) => ({ counter: counter + 1 }));
  }
}
