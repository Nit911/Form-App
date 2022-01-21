import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {

  constructor( private router : Router ) { }

  ngOnInit(): void {
  }

  ans : any = [ "Yes", "No" ]

  country : any = [ "Argentina", "Australia", "Brazil", "Canada", "China", "France", "Germany", "India", "Indonesia", "Italy", "Japan", "Republic of Korea", "Mexico", "Russia", "Saudi Arabia", "South Africa", "Turkey", "United Kingdom", "United States of America", "European Union" ]

  array : any = []

  onSubmit(value: any){
    this.array.push(value)
    this.router.navigate(['/Tq'])
  }

}
