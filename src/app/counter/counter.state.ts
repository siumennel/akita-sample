import { ElementRef, Injectable } from '@angular/core';
import { guid, Query, Store, StoreConfig } from '@datorama/akita';

type State = { counter: number };

export class CounterState {
  store: Store<State>;
  query: Query<State>;
}

export function counterStateFactory(element: ElementRef<Element>) {
  const name = element.nativeElement.getAttribute('name');
  const store = new Store<State>({ counter: 0 }, { name });
  const query = new Query<State>(store);

  return {
    store,
    query
  };
}
