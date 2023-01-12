import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header';
import { CreateUserTemplateFormComponent } from './components/user/create-user-template-form';
import { CreateUserReactiveFormComponent } from './components/user/create-user-reactive-form';
import { StartsWithCapitalValidatorDirective } from './components/directives/startWithCapital.directive';
import { CreateUserReactiveFormBuilderComponent } from './components/user/create-user-reactive-form-builder';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateUserTemplateFormComponent,
    CreateUserReactiveFormComponent,
    CreateUserReactiveFormBuilderComponent,
    StartsWithCapitalValidatorDirective,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'template', component: CreateUserTemplateFormComponent },
      { path: 'reactive', component: CreateUserReactiveFormComponent },
      { path: 'builder', component: CreateUserReactiveFormBuilderComponent },
      { path: 'grid', component: CreateUserReactiveFormComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
