import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpdataService } from '../../services/httpdata.service';



@Component({
  selector: 'app-report-engine',
  templateUrl: './report-engine.component.html',
  styleUrls: ['./report-engine.component.css'],
})
export class ReportEngineComponent {
  public rectCoordinates = [];
  public cirCoordinates = [];
  public ellipseCoordinates = [];
  timer = null;

  param: any;
  constructor(private router: ActivatedRoute, private httpdata: HttpdataService ) {
    this.router.paramMap.subscribe((data) => {
      this.param = data.get('id');
      console.log(this.param);


    });
  }

  ngOnInit(): void { }
}
