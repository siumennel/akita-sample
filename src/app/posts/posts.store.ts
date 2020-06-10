import { Injectable } from '@angular/core';
import { EntityState, ActiveState, EntityStore, StoreConfig } from '@datorama/akita';
import { Post } from './post.model';

export interface PostsState extends EntityState<Post, string>, ActiveState<string> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'posts' })
export class PostsStore extends EntityStore<PostsState> {

  constructor() {
    super();
  }

}
