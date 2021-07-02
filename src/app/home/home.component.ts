import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email:string="";
  password:string="";
  isChecked=false;

  constructor() { }

  ngOnInit(): void {
  }
  logInUser(){
    if(this.email=="priya@gmail.com" && this.password=="12345"){
      console.log("welcome to student directory");
    }
    else{
      console.log("user Unauthorized");
    }
  }

}
