import { Component, Input, Output,EventEmitter} from '@angular/core';
import {Character} from "../../interfaces/character.interface"

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent  {
  @Output()
  public emitOnDeleteCharacterById = new EventEmitter<string>();

  @Input()
  public listCharacters: Character[] = [{
    id: '',
    name: 'Trunk',
    power: 10
  }]

  /*emitDeleteCharacter(index:number):void{
    console.log(index);
    this.emitOnDeleteCharacter.emit(index);
  }*/

  DeleteCharacterById(id?:string):void{
    if(!id) return;
    this.emitOnDeleteCharacterById.emit(id);
  }
 
}
