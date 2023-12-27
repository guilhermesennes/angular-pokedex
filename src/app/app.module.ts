import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HomeComponent, DetailsComponent, AppRoutingModule, HttpClientModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
