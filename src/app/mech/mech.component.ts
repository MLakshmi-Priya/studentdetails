import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DatalistService } from '../datalist.service';
import{ IStudent } from '../student';

@Component({
  selector: 'app-mech',
  templateUrl: './mech.component.html',
  styleUrls: ['./mech.component.css']
})
export class MechComponent implements OnInit {
  public students:any[]=[];
  isChecked=false;
  c=0;

  constructor( private datalistService: DatalistService) { }

  ngOnInit() {
    this.datalistService.getMechStudents().subscribe(
      data=>(this.students)=data);
  }


}
