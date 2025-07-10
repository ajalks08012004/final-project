import { Routes } from '@angular/router';
import { AnimeListComponent } from './features/anime/anime-list/anime-list';
import { AnimeDetailComponent } from './features/anime/anime-detail/anime-detail';
import { ProductListComponent } from './features/products/product-list/product-list';
import { Home } from './features/home/home';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'anime', component: AnimeListComponent },
  { path: 'anime/:id', component: AnimeDetailComponent },
  { path: 'products', component: ProductListComponent},
  {path: 'home', component: Home}
  , {path: 'anime-list', component: AnimeListComponent}

];
