import { Component } from '@angular/core';
import { LoaddynamicserviceService } from 'src/app/services/loaddynamicservice.service';
import { AdComponent } from '../../ad.AdComponent';

@Component({
  selector: 'app-dynamiccomp2',
  templateUrl: './dynamiccomp2.component.html',
  styleUrls: ['./dynamiccomp2.component.css'],
})
export class Dynamiccomp2Component implements AdComponent {
  constructor(private profileService: LoaddynamicserviceService) {}
  data: any;

  logout() {
    this.profileService.logout();
  }
}
