import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';

import { PostsState, PostsStore } from './posts.store';

@Injectable({ providedIn: 'root' })
export class PostsService extends NgEntityService<PostsState> {

  constructor(store: PostsStore) {
    super(store);
  }

}
