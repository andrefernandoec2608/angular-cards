import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

import { Item } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public listado : Item[] = [{
    id : uuid(), name: "Papel", level : 100
  },{
    id : uuid(), name: "Tijera", level : 200
  },{
    id : uuid(), name: "Piedra", level : 300
  },{
    id : uuid(), name: "Bomba", level : 400
  }];

  anadirItem(itemNuevo : Item) : void {
    const item : Item = {id:uuid(), ...itemNuevo} ;
    this.listado.push(item);
  }

  eliminarItem(idEliminado : string) : void {
    this.listado = this.listado.filter((value)=> value.id != idEliminado);
  }

  constructor() { }

}
