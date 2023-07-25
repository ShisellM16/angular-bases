import { Component, Input, Output,EventEmitter} from '@angular/core';
import {Character} from "../../interfaces/character.interface"

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent  {
  @Output()
  public emitOnDeleteCharacter = new EventEmitter<number>();

  @Input()
  public listCharacters: Character[] = [{
    name: 'Trunk',
    power: 10
  }]

  emitDeleteCharacter(index:number):void{
    console.log(index);
    this.emitOnDeleteCharacter.emit(index);
  }

}
