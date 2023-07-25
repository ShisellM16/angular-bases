import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import {DbzService} from '../../services/dbz.service.ts.service';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss']
})

export class AddCharacterComponent  {

  @Output()
  public emitOnNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character={
    name:'',
    power:0
  };

  emitCharacter():void{
    console.log(this.character);    
    if(this.character.name.length === 0) return;

    this.emitOnNewCharacter.emit(this.character);
    this.character= {name:'',power:0};
  }
}
