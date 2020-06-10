import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import { StoriesState, StoriesStore } from './stories.store';

@Injectable({ providedIn: 'root' })
export class StoriesQuery extends Query<StoriesState> {

  constructor(protected store: StoriesStore) {
    super(store);
  }

}
