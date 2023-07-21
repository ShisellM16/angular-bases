import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public heroNames: String[]= ['Spiderman','IronMan','DeadPool'];
  public heroDeleted?: String;

  removeHero(){
    this.heroDeleted= this.heroNames.pop();
  }

  ngOnInit(): void {
  }

}
