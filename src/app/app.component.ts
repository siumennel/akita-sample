import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';

import { Movie } from './movies/state/movie.model';
import { MovieQuery } from './movies/state/movie.query';
import { MovieService } from './movies/state/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'e-commerce';
  public movies$: Observable<Movie[]>;
  public selectMovie$ =  this.query.selectMovie$;

  constructor(private service: MovieService, private query: MovieQuery) {}

  ngOnInit(): void {
      // Subscribe to the collection
      //this.service.syncCollection().subscribe();
      // Get the list from the store
      //this.movies$ = this.query.selectAll();
    }

  onUpdate($event) {
    console.log($event)
  }

}
