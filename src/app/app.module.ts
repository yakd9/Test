import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { HttpClientModule, /* other http imports */ } from "@angular/common/http";
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/guards/auth.guard';
import { AuthService } from './auth/services/auth.service';
import { AppRoutingModule } from './app.routing.module';

//import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    FlexLayoutModule,    
    HttpClientModule,
    AuthModule
    
    
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { 
    console.log('AppModule--->');
  }
 }
