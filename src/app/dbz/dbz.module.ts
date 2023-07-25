import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AddCharacterComponent } from './components/add-character/add-character.component';
import { MainDbzComponent } from './pages/main-page-component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    MainDbzComponent,
    ListComponent,
    AddCharacterComponent
  ],
  exports:[
    MainDbzComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
 