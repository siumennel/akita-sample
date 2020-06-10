import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import { SessionState, SessionStore } from './session.store';

@Injectable({ providedIn: 'root' })
export class SessionQuery extends Query<SessionState> {

  selectIsLogin$ = this.select('token');
  selectName$ = this.select('name');

  constructor(protected store: SessionStore) {
    super(store);
  }

}
