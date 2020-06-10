import { Injectable } from '@angular/core';
import { EntityState, ActiveState, EntityStore, StoreConfig } from '@datorama/akita';
import { Movie } from './movie.model';

export interface MovieState extends EntityState<Movie, string>, ActiveState<string> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'movie' })
export class MovieStore extends EntityStore<MovieState> {

  constructor() {
    super();
  }

}
