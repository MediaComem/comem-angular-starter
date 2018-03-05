import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Joke } from '../../models/joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  @Input()
  joke: Joke;

  @Output()
  voted: EventEmitter<Joke>;

  constructor() {
    this.voted = new EventEmitter();
  }

  ngOnInit() {
  }

  vote() {
    this.joke.votes++;
    this.voted.emit(this.joke);
  }

}
