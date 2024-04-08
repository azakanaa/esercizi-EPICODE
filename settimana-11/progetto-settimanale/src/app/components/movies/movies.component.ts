import { Component } from '@angular/core';
import { FavMovies } from 'src/app/models/fav-movies.interface';
import { FavMoviesService } from 'src/app/service/fav-movies.service';
import { PopularMovies } from 'src/app/models/movies-popular.interface';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  movies: PopularMovies[] = [];

  constructor(private apiSrv: MoviesService, private favSrv: FavMoviesService) {}

  ngOnInit(): void {
    this.apiSrv.getMovies().subscribe((data) => {
      this.movies = data;
    });
  }
  addFav(data: any): void {
    this.favSrv.newFavorite(data).subscribe(() => {
        this.movies.push(data);
    }, (error) => {
        console.error('Errore durante l\'aggiunta:', error);
    });
}
}


