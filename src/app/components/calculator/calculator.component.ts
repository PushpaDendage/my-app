import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
title:string='Calculator App';
   num1: number=0;
   num2:number= 0;
   num3:number=0;
  add(){
    this.num3=this.num1+this.num2;
     }
 
   sub(){
       this.num3=this.num1-this.num2;
            }
        mul(){
      this.num3=this.num1*this.num2;
              }
      divide(){
       this.num3=this.num1/this.num2;
     }

  constructor() { }



  ngOnInit(): void {
  }
  
  
    }


