import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';

import { PostsState, PostsStore } from './posts.store';

@Injectable({ providedIn: 'root' })
export class PostsQuery extends QueryEntity<PostsState> {

  constructor(protected store: PostsStore) {
    super(store);
  }

}
