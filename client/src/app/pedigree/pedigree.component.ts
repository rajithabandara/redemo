import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pedigree',
  templateUrl: './pedigree.component.html',
  styleUrls: ['./pedigree.component.css'],
})
export class PedigreeComponent implements AfterViewInit, OnInit {
  @ViewChild('dataContainer') dataContainer: ElementRef;

  randlocx: number;
  randlocy: number;
  nosvgs: number;
  namefromroute: string;
  nocirclesserve: number;
  nocirclesserve2: number;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.randlocx = Math.round(Math.random() * 500);
    this.randlocy = Math.round(Math.random() * 500);
    // this.nosvgs = 5;

    // setInterval()

    // setInterval(() => {
    //   this.nosvgs = Math.round(new Date().getSeconds());
    //   console.log(this.nosvgs);
    //   // this.draw();
    // }, 1000);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.namefromroute = params['name'];
      console.log(params);

      switch (this.namefromroute) {
        case 'circle':
          this.http
            .get<any>('http://localhost:5000/randomint')
            .subscribe((data) => {
              console.log(data);
              this.nocirclesserve = data.randomint;
              this.ngAfterViewInit();
            });

          break;

        case 'square':
          this.http
            .get<any>('http://localhost:5000/hardcode')
            .subscribe((data) => {
              console.log(data);
              this.nocirclesserve2 = data.hardcode;
              this.ngAfterViewInit();
            });

          break;

        default:
          break;
      }
    });
  }

  ngAfterViewInit(): void {
    // this.draw();

    switch (this.namefromroute) {
      case 'circle':
        this.drawservercircle();
        break;

      case 'square':
        this.drawserversquare();
        break;

      default:
        break;
    }
  }

  drawservercircle() {
    let svgstring = '<svg height="800" width="800">';

    console.log('drawing circle - ' + this.nocirclesserve);

    for (let i = 0; i < this.nocirclesserve; i++) {
      this.randlocx = Math.round(Math.random() * 500);
      this.randlocy = Math.round(Math.random() * 500);
      svgstring =
        svgstring +
        `<circle cx=${this.randlocx} cy=${this.randlocy}  r="50"style="fill:yellow;stroke:purple;stroke-width:2" />`;
    }
    svgstring = svgstring + ` </svg>`;

    if (this.dataContainer) {
      this.dataContainer.nativeElement.innerHTML = svgstring;
    }
  }

  drawserversquare() {
    let svgstring = '<svg height="800" width="800">';

    console.log('drawing circle - ' + this.nocirclesserve);

    for (let i = 0; i < this.nocirclesserve2; i++) {
      this.randlocx = Math.round(Math.random() * 500);
      this.randlocy = Math.round(Math.random() * 500);
      svgstring =
        svgstring +
        `<rect x=${this.randlocx} y=${this.randlocy}  width="150" height="150"  style="fill:blue;stroke:pink;stroke-width:5;fill-opacity:0.1;stroke-opacity:0.9" />`;
    }
    svgstring = svgstring + ` </svg>`;

    if (this.dataContainer) {
      this.dataContainer.nativeElement.innerHTML = svgstring;
    }
  }

  // draw() {
  //   let svgstring = '<svg height="800" width="800">';

  //   for (let i = 0; i < this.nosvgs; i++) {
  // this.randlocx = Math.round(Math.random() * 500);
  // this.randlocy = Math.round(Math.random() * 500);

  //     switch (this.namefromroute) {
  //       case 'circle':
  // svgstring =
  //   svgstring +
  //   `<ellipse cx=${this.randlocx} cy=${this.randlocy} rx="100" ry="50"style="fill:yellow;stroke:purple;stroke-width:2" />`;
  //         break;

  //       case 'square':
  //         svgstring =
  //           svgstring +
  //           `<rect  x=${this.randlocx} y=${this.randlocy} width="150" height="150"  style="fill:blue;stroke:pink;stroke-width:5;fill-opacity:0.1;stroke-opacity:0.9" />`;
  //         break;

  //       default:
  //         break;
  //     }
  //   }

  //   svgstring = svgstring + ` </svg>`;

  // if (this.dataContainer) {
  //   this.dataContainer.nativeElement.innerHTML = svgstring;
  // }
  // }
}
