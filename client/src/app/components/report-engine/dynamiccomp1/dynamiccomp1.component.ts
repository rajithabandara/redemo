import { Component, Input } from '@angular/core';

import { LoaddynamicserviceService } from '../../../services/loaddynamicservice.service';

@Component({
  selector: 'app-dynamiccomp1',
  templateUrl: './dynamiccomp1.component.html',
  styleUrls: ['./dynamiccomp1.component.css'],
})
export class Dynamiccomp1Component {
  @Input() title: string;

  constructor(private profileService: LoaddynamicserviceService) {}

  ngOnInit(): void {}
  login() {
    this.profileService.login();
  }
}
