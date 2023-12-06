import { SitePageComponent } from './../components/sitepage/sitepage.component';
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IconInfoComponent } from './icon/icon-info/icon-info.component';
import { IconModifyComponent } from './icon/icon-modify/icon-modify.component';
import { IconDeleteComponent } from './icon/icon-delete/icon-delete.component';
import { ButtonCreateComponent } from './button/button-create/button-create.component';
import { ButtonSaveComponent } from './button/button-save/button-save.component';
import { ButtonCloseComponent } from './button/button-close/button-close.component';
import { NgSelectModule } from "@ng-select/ng-select";
import { IconPlusComponent } from './icon/icon-plus/icon-plus.component';
import { IconMinusComponent } from './icon/icon-minus/icon-minus.component';
import { CurrencyMaskModule, CURRENCY_MASK_CONFIG } from "ng2-currency-mask";
import { IconPrintComponent } from './icon/icon-print/icon-print.component';
import { IconSendComponent } from './icon/icon-send/icon-send.component';
import { IconHeadsetComponent } from './icon/icon-headset/icon-headset.component';
import { ButtonCancelComponent } from './button/button-cancel/button-cancel.component';
import { ButtonPrintComponent } from './button/button-print/button-print.component';
import { IconDownloadComponent } from './icon/icon-download/icon-download.component';
import { IconPaperComponent } from './icon/icon-paper/icon-paper.component';
import { ButtonRefreshComponent } from './button/button-refresh/button-refresh.component';
import { IconBookComponent } from './icon/icon-book/icon-book.component';
import { IconCheckComponent } from './icon/icon-check/icon-check.component';
import { CustomCurrencyMaskConfig } from '../service/constants';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';
import { AuthInterceptor } from 'src/app/components/auth/auth.service/interceptors/auth.interceptor';
import { environment } from 'src/environments/environment';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { API_BALL_URL } from '../service/ball.service';
import { API_AUTH_URL } from '../service/auth.service';
const ICON = [
  IconInfoComponent,
  IconModifyComponent,
  IconDeleteComponent,
  IconPlusComponent,
  IconMinusComponent,
  IconPrintComponent,
  IconSendComponent,
  IconHeadsetComponent,
  IconDownloadComponent,
  IconPaperComponent,
  IconBookComponent,
  IconCheckComponent,
];
const PAGE = [SitePageComponent];
const BUTTON = [
  ButtonCreateComponent,
  ButtonSaveComponent,
  ButtonCloseComponent,
  ButtonCancelComponent,
  ButtonPrintComponent,
  ButtonRefreshComponent,
];
const MODULE = [
  CommonModule,
  FormsModule,
  NgbModule,
  NgSelectModule,
  CurrencyMaskModule,
];
const MATERIAL = [
  MatSlideToggleModule
]
// const KENDOMODULE = [TreeViewModule];
@NgModule({
  declarations: [...BUTTON, ...ICON, ...PAGE],
  imports: [...MODULE, ...MATERIAL],
  exports: [...MODULE, ...MATERIAL, ...BUTTON, ...ICON, ...PAGE],
  providers: [
    { provide: API_BALL_URL, useValue: environment.API_BALL_URL },
    { provide: API_AUTH_URL, useValue: environment.API_AUTH_URL },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: LOCALE_ID,
      useValue: "vi-VN",
    },
    {
      provide: APP_BASE_HREF,
      useValue: "/",
    },
    {
      provide: CURRENCY_MASK_CONFIG,
      useValue: CustomCurrencyMaskConfig,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class TemplateModule {}
