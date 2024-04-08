import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { MovieGenres } from '../models/movie-genres.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieGenresService {
  apiURL = environment.apiURL;

  constructor(private http: HttpClient) { }
  getGenres() {
    return this.http.get<MovieGenres[]>(`${this.apiURL}movies-popular`);
  }
  getGenre(id: number) {
    return this.http.get<MovieGenres>(`${this.apiURL}movies-popular/${id}`);
  }
}
