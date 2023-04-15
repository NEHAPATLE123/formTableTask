import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StdFormComponent } from './shared/components/std-form/std-form.component';
import { StdTableComponent } from './shared/components/std-table/std-table.component';
import { FormsModule } from '@angular/forms';
import { StdForm11Component } from './shared/components/std-form11/std-form11.component';
import { StdTable11Component } from './shared/components/std-table11/std-table11.component';
import { StdForm22Component } from './shared/components/std-form22/std-form22.component';
import { StdTable22Component } from './shared/components/std-table22/std-table22.component';

@NgModule({
  declarations: [
    AppComponent,
    StdFormComponent,
    StdTableComponent,
    StdForm11Component,
    StdTable11Component,
    StdForm22Component,
    StdTable22Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
