import { NgClass, NgIf } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-leftside-bar',
  standalone: true,
  imports: [RouterLink,NgIf,NgClass],
  templateUrl: './leftside-bar.component.html',
  styleUrl: './leftside-bar.component.css'
})
export class LeftsideBarComponent {

  // @Input() sideBar:boolean=true;

  // constructor(){

  // }

  // clickmeCalled(){
  //   console.log('clickeddddddd.....')
  // }
}

