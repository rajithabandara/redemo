import { Component, Input } from '@angular/core';

import { LoaddynamicserviceService } from '../../../services/loaddynamicservice.service';
import { AdComponent } from '../../ad.AdComponent';

@Component({
  selector: 'app-dynamiccomp1',
  templateUrl: './dynamiccomp1.component.html',
  styleUrls: ['./dynamiccomp1.component.css'],
})
export class Dynamiccomp1Component implements AdComponent {
  @Input() title: string;

  constructor(private profileService: LoaddynamicserviceService) {}
  data: any;

  ngOnInit(): void {}
  login() {
    this.profileService.login();
  }
}
