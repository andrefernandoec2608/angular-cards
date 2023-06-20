import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public name : string = 'Siete';
  public age : number = 7;
  public friendsList : string[] = ['Lenin','Willy','Geovanny','Camilo'];

  getTexto() : string{
    return `${this.name} - ${this.age}`;
  }

  removerUltimoAmigo() : void {
    this.friendsList.pop();
  }

}
