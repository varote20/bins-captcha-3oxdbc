import { NgModule, ModuleWithProviders  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CaptchaComponent } from './captcha.component';
import {CaptchaService} from './captcha.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CaptchaComponent],
  exports:[CaptchaComponent],
})
export class CaptchaModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CaptchaModule,
      providers: [ CaptchaService ]
    };
  }
}