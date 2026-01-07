import { Component } from '@angular/core';
import {CodeIconComponent} from '../../../components/icons/code-icon.component';
import {NgOptimizedImage, NgTemplateOutlet} from '@angular/common';
import {Constants} from '../../../commons/constants';
import {Project} from '../../../models/project';

@Component({
  selector: 'app-projects',
  imports: [
    CodeIconComponent,
    NgTemplateOutlet,
    NgOptimizedImage
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  buildingProjects = Constants.PROFILE_DEV.BUILDING_PROJECTS;
  projectList: Project[] = Constants.PROFILE_DEV.PROJECTS;
}
