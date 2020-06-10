import { map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { RouterQuery } from '@datorama/akita-ng-router-store';

import { MovieState, MovieStore } from './movie.store';

@Injectable({ providedIn: 'root' })
export class MovieQuery extends QueryEntity<MovieState> {

  selectMovie$ = this.routerQuery.selectParams('id').pipe(
    // tslint:disable-next-line: triple-equals
    switchMap(id =>  {console.log('id => ' + id); return this.selectEntity(id); } ),
     );


  constructor(protected store: MovieStore, private routerQuery: RouterQuery) {
    super(store);
  }

}
