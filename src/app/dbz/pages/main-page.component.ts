import { Component, Input } from '@angular/core';
import { Item } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-dbz-main-pages',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private dbzService : DbzService) {}

  getListado() : Item[] {
    return [...this.dbzService.listado];
  }

  eliminarItem(idEliminado : string) : void {
    this.dbzService.eliminarItem(idEliminado);
  }

  anadirNuevoItem(itemNuevo : Item) : void {
    this.dbzService.anadirItem(itemNuevo);
  }
}
