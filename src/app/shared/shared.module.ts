import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NbButtonModule, NbCheckboxModule, NbIconModule, NbSelectModule, NbToastrModule } from '@nebular/theme';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    TranslateModule,
    NbToastrModule.forRoot(),
    NbButtonModule,
    NbSelectModule,
    NbCheckboxModule,
    NbIconModule
  ],
  exports: [
    TranslateModule,
    BrowserModule,
    NbToastrModule,
    NbButtonModule,
    NbSelectModule,
    NbCheckboxModule,
    NbIconModule
  ],
  providers: []
})
export class SharedModule { }
