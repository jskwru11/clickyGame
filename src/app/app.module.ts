import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { ImgcardComponent } from './containers/imgcard/imgcard.component';
import { reducer } from './reducers/images.reducers';

@NgModule({
  declarations: [
    AppComponent,
    ImgcardComponent
  ],
  imports: [
  
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    StoreModule.forRoot({ images: reducer }),
    StoreDevtoolsModule.instrument({maxAge: 10})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
