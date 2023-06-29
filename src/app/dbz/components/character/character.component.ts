import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  @Output()
  public onNewItem : EventEmitter<Item> = new EventEmitter();

  public itemNuevo : Item = {
    name: '',
    level: 0
  }
  emitItem() : void {
    if (this.itemNuevo.name.length == 0) return;
    this.onNewItem.emit({...this.itemNuevo});
    this.itemNuevo.name = '';
    this.itemNuevo.level = 0;
  }
}
