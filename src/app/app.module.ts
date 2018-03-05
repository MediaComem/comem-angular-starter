import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { ExclamationPipe } from './pipes/exclamation.pipe';
import { JokeService } from './services/joke.service';
import { JokeComponent } from './components/joke/joke.component';
import { NotInValidatorDirective } from './validators/notIn.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ExclamationPipe,
    JokeComponent,
    NotInValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    JokeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
