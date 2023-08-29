import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './modules/components/footer/footer.component';
import { NavComponent } from './modules/components/nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserModule } from './modules/user/user.module';
import {NgOptimizedImage} from "@angular/common";
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent
  ],
    imports: [
        BrowserModule,
        MatTableModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        UserModule,
        NgOptimizedImage,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
