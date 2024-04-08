import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { PopularMovies } from '../models/movies-popular.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiURL = environment.apiURL;

  constructor(private http: HttpClient) { }
  getMovies() {
    return this.http.get<PopularMovies[]>(`${this.apiURL}movies-popular`);
  }

  getMovie(id: number) {
    return this.http.get<PopularMovies>(`${this.apiURL}movies-popular/${id}`);
  }
}

