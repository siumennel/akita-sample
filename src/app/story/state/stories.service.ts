import { tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';

import { StoriesStore } from './stories.store';
import { Story } from './story.model';

@Injectable({ providedIn: 'root' })
export class StoriesService {

  constructor(private storiesStore: StoriesStore, private http: HttpClient) {
  }


  get() {
    // return this.http.get<Story[]>('https://api.com').pipe(tap(entities => {
    //   this.storiesStore.set(entities);
    // }));
  }

  update(story: Partial<Story>) {
    this.storiesStore.update(story);
  }

  remove() {
    this.storiesStore.destroy();
  }

}
