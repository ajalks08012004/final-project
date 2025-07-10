import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,Navbar],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
