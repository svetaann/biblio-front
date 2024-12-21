import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ ],
  exports: [ ],
  providers: [],
  bootstrap: [ProfileComponent],
})
export class ProfileModule { }
