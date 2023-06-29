import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public itemList : Item[] = [];
  @Output()
  public onItemEliminado : EventEmitter<string> = new EventEmitter();

  borrarItem (id? : string) :void {
    this.onItemEliminado.emit(id);
  }
}
