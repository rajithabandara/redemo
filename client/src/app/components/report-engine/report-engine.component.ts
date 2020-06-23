import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-engine',
  templateUrl: './report-engine.component.html',
  styleUrls: ['./report-engine.component.css'],
})
export class ReportEngineComponent {
  param: any;

  constructor(private router: ActivatedRoute) {
    this.router.paramMap.subscribe((data) => {
      this.param = data.get('id');
      console.log(this.param);
    });
  }
}
