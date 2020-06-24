import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centerdyanamic',
  templateUrl: './centerdyanamic.component.html',
  styleUrls: ['./centerdyanamic.component.css'],
})
export class CenterdynamicComponent {
  coordinates = [];
  toggle: boolean = false;
  atrstr = ``;
  viewboxstr = ``;

  viwporth: number;
  viwportw: number;

  constructor() {
    for (let i = 0; i < 20; i++) {
      this.coordinates.push({
        // x: 500,
        // y: 500,
        x: Math.round((Math.random() * 5000) % 1000),
        y: Math.round((Math.random() * 5000) % 1000),
      });
    }

    let harr = this.coordinates.map((e) => e.y);

    let warr = this.coordinates.map((e) => e.x);

    harr.sort();
    warr.sort();

    this.viwporth = 4000; //harr[harr.length - 1] + 300;
    this.viwportw = 4000; //warr[warr.length - 1] + 300;

    console.log(this.viwportw, this.viwporth);

    // this.viewboxstr = `0 0 2400 2400`;

    this.viewboxstr = `0 0  ${this.viwportw} ${this.viwporth}`;

    console.log(harr, warr);
  }

  center() {
    this.toggle = !this.toggle;

    console.log(this.toggle, ' toggled !');

    if (!this.toggle) {
      let el: any = document.querySelector('#groptsvg');
      // let midX =
      //   (el.getBoundingClientRect().left + el.getBoundingClientRect().right) /
      //   2;
      // let midY =
      //   (el.getBoundingClientRect().top + el.getBoundingClientRect().bottom) /
      //   2;

      // console.log('g top - ', el.getBBox());

      // console.log('*****************************');

      // console.log('group center - ', midX, midY);
      // console.log(
      //   ' svg canvas center - ',
      //   this.viwportw / 2,
      //   this.viwporth / 2
      // );

      // let mainsvg = document.getElementById('mainsvg');

      console.log(el.getBBox());

      // height: 200;
      // width: 200;
      // x: 500;
      // y: 500;

      let midx = el.getBBox().width / 2 + el.getBBox().x;
      let midy = el.getBBox().height / 2 + el.getBBox().y;

      let diffx = this.viwportw / 2 - midx;
      let diffy = this.viwporth / 2 - midy;

      console.log('diff - ', diffx, diffy);

      this.atrstr = `translate(${diffx},${diffy})`;
    }

    // var  ctm = document.getElementById("object_7").getCTM()

    // // Calculate the centre of the group
    // var cx = bbox.x + bbox.width/2;
    // var cy = bbox.y + bbox.height/2;

    // // Transform cx,cy by the group's transform
    // var pt = document.getElementById("mysvg").createSVGPoint();
    // pt.x = cx;
    // pt.y = cy;
    // pt = pt.matrixTransform(ctm);
  }
}
