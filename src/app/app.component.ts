import {
  AfterContentChecked,
  Component,
  OnInit
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ CookieService ]
})
export class AppComponent implements OnInit, AfterContentChecked {
  public language = 'USA';
  public isLogin = false;

  constructor(private readonly translateService: TranslateService,
              private readonly cookieService: CookieService) {}

  ngOnInit(): void {
    this.translateService.use(environment.locales[0]);
  }

  ngAfterContentChecked(): void {
    this.isLogin = this.cookieService.check('USER');
  }

  public toEnglish(): void {
    this.language = 'USA';
    this.isLanguageChange();
  }

  public toRussian(): void {
    this.language = 'Russian';
    this.isLanguageChange();
  }

  public isLanguageChange(): void {
    if (this.language === 'USA') {
      this.translateService.use(environment.locales[0]);
    } else {
      this.translateService.use(environment.locales[1]);
    }
  }
}
