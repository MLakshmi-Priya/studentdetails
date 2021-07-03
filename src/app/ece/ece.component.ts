import { Component, OnInit } from '@angular/core';
import { DatalistService } from '../datalist.service';

@Component({
  selector: 'app-ece',
  templateUrl: './ece.component.html',
  styleUrls: ['./ece.component.css']
})
export class EceComponent implements OnInit {
  students:any[]=[];

  constructor(private datalistService: DatalistService) { }

  ngOnInit() {
    this.datalistService.getEceStudents().subscribe(
      data=>(this.students)=data
    );
  }

}
