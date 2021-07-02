import { Component } from '@angular/core';
import {HomeComponent} from './home/home.component';
import{CseComponent} from './cse/cse.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student-directory';

}
