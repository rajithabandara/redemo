import { Component } from '@angular/core';
import { LoaddynamicserviceService } from 'src/app/services/loaddynamicservice.service';

@Component({
  selector: 'app-dynamiccomp2',
  templateUrl: './dynamiccomp2.component.html',
  styleUrls: ['./dynamiccomp2.component.css'],
})
export class Dynamiccomp2Component {
  constructor(private profileService: LoaddynamicserviceService) {}

  logout() {
    this.profileService.logout();
  }
}
