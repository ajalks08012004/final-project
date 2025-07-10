import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimeService } from '../../../core/anime.service'; // ✅ Correct import

@Component({
  selector: 'app-anime-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './anime-list.html',
  styleUrls: ['./anime-list.css']
})
export class AnimeListComponent implements OnInit {
  animeList: any[] = [];

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.animeService.getTopAnime().subscribe((res: any) => {
      console.log('Top Anime Response:', res); // ✅ Should appear in browser console
      this.animeList = res.data;
    });
  }
}
