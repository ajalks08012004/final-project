import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AnimeService {
  private baseUrl = 'https://api.jikan.moe/v4';

  constructor(private http: HttpClient) {}

  getTopAnime() {
    return this.http.get(`${this.baseUrl}/top/anime`);
  }

  getAnimeById(id: number) {
    return this.http.get(`${this.baseUrl}/anime/${id}`);
  }
}
