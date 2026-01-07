import { Component } from '@angular/core';
import {CodeIconComponent} from '../../../components/icons/code-icon.component';
import {TypeScriptComponent} from '../../../components/icons/typescript-icon.component';
import {JavascriptIcon} from '../../../components/icons/javascript-icon';
import {JavaIcon} from '../../../components/icons/java-icon';
import {MysqlIcon} from '../../../components/icons/mysql-icon';
import {PostgresqlIcon} from '../../../components/icons/postgresql-icon';
import {ReactIcon} from '../../../components/icons/react-icon';
import {SpringBootIcon} from '../../../components/icons/springboot-icon';
import {NestjsIcon} from '../../../components/icons/nestjs-icon';
import {AngularComponent} from '../../../components/icons/angular-icon';
import {DockerIcon} from '../../../components/icons/docker-icon';

@Component({
  selector: 'app-technologies',
  imports: [
    CodeIconComponent,
    TypeScriptComponent,
    JavascriptIcon,
    JavaIcon,
    MysqlIcon,
    PostgresqlIcon,
    ReactIcon,
    SpringBootIcon,
    NestjsIcon,
    AngularComponent,
    DockerIcon
  ],
  templateUrl: './technologies.html',
  styleUrl: './technologies.scss',
})
export class Technologies {

}
