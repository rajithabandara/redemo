import { Component, OnInit } from '@angular/core';
import { SvgcircleComponent } from '../components/svgcircle/svgcircle.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-engine',
  templateUrl: './report-engine.component.html',
  styleUrls: ['./report-engine.component.css'],
})
export class ReportEngineComponent implements OnInit {
  public companies: any[] = [
    { id: 0, name: 'Available' },
    { id: 1, name: 'Ready' },
    { id: 2, name: 'Started' },
  ];


  qparam:any;
  constructor(router:ActivatedRoute) {
    router.queryParamMap.subscribe(data =>{
      this.qparam = data.get('item');
      console.log(this.qparam);
    })
  }


  
  ngOnInit(): void {}
}

