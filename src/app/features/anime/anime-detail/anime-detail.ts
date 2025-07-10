import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnimeService } from '../../../core/anime.service';

@Component({
  selector: 'app-anime-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anime-detail.html',
  styleUrls: ['./anime-detail.css']
})
export class AnimeDetailComponent implements OnInit {
  animeId!: number;
  anime: any;

  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeService
  ) {}

  ngOnInit(): void {
    this.animeId = Number(this.route.snapshot.paramMap.get('id'));
    this.animeService.getAnimeById(this.animeId).subscribe((res: any) => {
      this.anime = res.data;
      console.log('Anime Details:', this.anime);
    });
  }
}
