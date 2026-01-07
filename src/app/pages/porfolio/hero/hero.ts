import { Component } from '@angular/core';
import {LinkedinIconComponent} from '../../../components/icons/linkedin-icon.component';
import {SocialPill} from '../../../commons/social-pill';
import {NgOptimizedImage} from '@angular/common';
import {GithubIconComponent} from '../../../components/icons/github-icon.component';
import {MailIcon} from '../../../components/icons/mail-icon';
import {Constants} from '../../../commons/constants';

@Component({
  selector: 'app-hero',
  imports: [
    LinkedinIconComponent,
    SocialPill,
    NgOptimizedImage,
    GithubIconComponent,
    MailIcon
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  leoDev = Constants.PROFILE_DEV;
  description = this.leoDev.DESCRIPTION;
}
