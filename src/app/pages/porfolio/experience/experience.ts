import { Component } from '@angular/core';
import {BriefcaseIconComponent} from '../../../components/icons/briefcase-icon.component';
import {Constants} from '../../../commons/constants';

@Component({
  selector: 'app-experience',
  imports: [
    BriefcaseIconComponent
  ],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  experienceList = Constants.PROFILE_DEV.EXPERIENCE;
}
