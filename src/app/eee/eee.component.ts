import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DatalistService } from '../datalist.service';

@Component({
  selector: 'app-eee',
  templateUrl: './eee.component.html',
  styleUrls: ['./eee.component.css']
})
export class EeeComponent implements OnInit {
  public students: any[]=[];

  constructor(private datalistService: DatalistService) { }

  ngOnInit() {
    this.datalistService.getEeeStudents().subscribe(
      data=> this.students=data
    );
  }

}
