import { Component, OnInit } from '@angular/core';
import { DefaultsService } from './defaults.service';

@Component({
  selector: 'app-super-basic',
  templateUrl: './super-basic.component.html',
  styleUrls: ['./super-basic.component.css']
})
export class SuperBasicComponent implements OnInit {

  word: string;
  constructor(private service: DefaultsService) { }

  ngOnInit() {
    this.word = this.service.getDefault();
  }

  makeUpper() {
    this.word = this.word.toUpperCase();
  }

}
