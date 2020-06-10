import { Component } from '@angular/core';
import { NgEntityServiceLoader } from '@datorama/akita-ng-entity-service';

import { PostsQuery } from './posts.query';
import { PostsService } from './posts.service';

@Component({})
export class PostsPageComponent {
  posts$ = this.postsQuery.selectAll();
  error: any;
  loaders = this.loader.loadersFor('posts');


  constructor(
    private postsQuery: PostsQuery,
    private postsService: PostsService,
    private loader: NgEntityServiceLoader
  ) {}

  ngOnInit() {
    this.postsService.get().subscribe();
  }

  gethOne(id) {
    this.postsService.get(id).subscribe();
  }

  add() {
    this.postsService.add({ title: 'New Post', body: '' }).subscribe();
  }

  update(id) {
    this.postsService.update(id, { title: 'New title' }).subscribe({
      error: (error) => {
        this.error = error;
      }
    });
  }

  remove(id) {
    this.postsService.delete(id).subscribe();
  }
}
