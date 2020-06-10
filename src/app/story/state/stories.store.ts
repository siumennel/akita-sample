import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

import { createStory, Story } from './story.model';

export interface StoriesState extends Story {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'stories' })
export class StoriesStore extends Store<StoriesState> {

  constructor() {
    super(createStory());
  }

}
