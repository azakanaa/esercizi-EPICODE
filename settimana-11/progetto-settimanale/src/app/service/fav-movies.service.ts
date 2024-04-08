import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { FavMovies } from '../models/fav-movies.interface';

@Injectable({
  providedIn: 'root'
})
export class FavMoviesService {
  apiURL = environment.apiURL;

  constructor(private http: HttpClient) { }
  getFavorites(id: number) {
    return this.http.get<FavMovies[]>(`${this.apiURL}favorites?userId=${id}`);
  }
  newFavorite(data: FavMovies) {
    return this.http.post<FavMovies>(`${this.apiURL}favorites`, data);
  }
  deleteFavorite(id: number) {
    return this.http.delete(`${this.apiURL}favorites/${id}`);
  }
}
