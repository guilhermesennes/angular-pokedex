import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  standalone: true
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  pokemonId = -1;
  pokemonService = inject(PokemonService);
  pokemon: any | undefined;

  constructor() {
    this.pokemonId = this.route.snapshot.params['id']
    this.pokemon = this.pokemonService.getPokemonByIdentifier(this.pokemonId).subscribe((data: any) => {
      this.pokemon = data; // Adapte conforme a estrutura da resposta da API
      console.log(this.pokemon)
    });
  }

  ngOnInit() {
    console.log(this.pokemonId)
  }
}
