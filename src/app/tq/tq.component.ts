import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tq',
  templateUrl: './tq.component.html',
  styleUrls: ['./tq.component.scss']
})
export class TqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ref_id : number = Math.round((Math.random()*10000000000));

}
