import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';
import { ForLoopComponent } from './ngsyntax/for-loop/for-loop.component';
import { SimpleFormComponent } from './ngsyntax/simple-form/simple-form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { StyleBindingComponent } from './ngsyntax/style-binding/style-binding.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddBootstrapComponent } from './ngsyntax/add-bootstrap/add-bootstrap.component';
import { ParentComponentComponent } from './ngsyntax/reusable-components/parent-component/parent-component.component';
import { ChildComponentComponent } from './ngsyntax/reusable-components/child-component/child-component.component';
import { RecieveDataParentComponentComponent } from './ngsyntax/send-data-child-componentent-to-parent-component/recieve-data-parent-component/recieve-data-parent-component.component';
import { SendDataChildComponentComponent } from './ngsyntax/send-data-child-componentent-to-parent-component/send-data-child-component/send-data-child-component.component';
import { PipeComponent } from './ngsyntax/pipe/pipe.component';
import { AppRouterModule } from './app-router.module';
import { AdminComponent } from './ngsyntax/routing/admin/admin.component';
import { RauterUsersComponent } from './ngsyntax/routing/rauter-users/rauter-users.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForLoopComponent,
    SimpleFormComponent,
    StyleBindingComponent,
    AddBootstrapComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    RecieveDataParentComponentComponent,
    SendDataChildComponentComponent,
    PipeComponent,
    AdminComponent,
    RauterUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
