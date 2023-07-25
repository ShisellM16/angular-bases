import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})

export class HeroComponent implements OnInit {

  public Name: String= 'Spiderman';
  public Age:Number = 25;
  private HeroCode:number= 12345;

  get heroCode():Number{
    return this.HeroCode;
  }
  getHeroDescription():String{
    return `${this.Name} - ${this.Age}`;
  }
  changeHero(newHameHero:String){
    this.Name= newHameHero;
  }
  changeAge(newAgeHero:Number){
    this.Age= newAgeHero;
  }
  resetForm(){
    this.Name="Spiderman";
    this.Age=25;
  }
  constructor() { }
  ngOnInit(): void {
  }

}