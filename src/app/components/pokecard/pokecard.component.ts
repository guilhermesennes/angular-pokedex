import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.scss'],
  imports: [CommonModule, RouterModule],
  standalone: true,
})
export class PokecardComponent {
  @Input() pokemon!: any;

  ngOnInit() {
    console.log('Pokemon =>', this.pokemon);
  }
}
