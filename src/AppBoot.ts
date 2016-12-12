//main entry point
import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComp} from './AppComp';

bootstrap(AppComp, [])
  .catch(err => console.error(err));