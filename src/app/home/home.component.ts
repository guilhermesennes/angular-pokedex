import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/pokemon.service';
import { PokecardComponent } from '../components/pokecard/pokecard.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, PokecardComponent, HeaderComponent],
  standalone: true,
})
export class HomeComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe((data: any) => {
      this.pokemons = data; // Adapte conforme a estrutura da resposta da API
      console.log(this.pokemons);
    });
  }
}
