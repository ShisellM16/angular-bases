import { Component, OnInit } from '@angular/core';
import {Character} from "../interfaces/character.interface"
import {DbzService} from '../services/dbz.service.ts.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page-component.html'
})

export class MainDbzComponent {
    constructor(public dbzService: DbzService){

    }
}