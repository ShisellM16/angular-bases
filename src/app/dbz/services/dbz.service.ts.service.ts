import { Injectable } from '@angular/core';
import {Character} from '../interfaces/character.interface'

@Injectable({
  providedIn: 'root'
})

export class DbzService {
  //public variable: String= "Hola List";
    public characters: Character[] = [{
      name: 'Krilin',
      power:1000
  },
  {
      name: 'Goku',
      power: 9500
  },
  {
      name: 'Vegeta',
      power: 7500
  }];

  onNewCharacter(character: Character):void{
      this.characters.push(character);        
      //this.characters.push(character);        
  }

  onDeleteCharacter(index:number):void{
      //this.characters.indexOf(index);
      console.log('Borrado: ' + index);
      this.characters.splice(index);  
  }

}
