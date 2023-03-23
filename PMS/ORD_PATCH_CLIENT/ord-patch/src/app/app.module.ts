import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorModule } from '@modules/error/error.module';
import { BrowserAnimationsModule } from 
'@angular/platform-browser/animations';
import { NavigationModule } from '@modules/navigation/navigation.module';


@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, NoopAnimationsModule, BrowserAnimationsModule, ErrorModule, NavigationModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
