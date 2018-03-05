import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Joke } from './models/joke';
import { JokeService } from './services/joke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  titleComment: string;
  greeting: string;
  displayedGreeting: string;
  jokes: Joke[];
  bestVote: number;
  totalVotes: number;

  constructor(private jokeService: JokeService) {
    this.title = 'App';
    this.titleComment = 'This is awesome!';
    this.greeting = '';
    this.jokes = [
      { text: 'Knock knock', votes: 0 },
      { text: 'The cake is a lie', votes: 0 }
    ];
    this.bestVote = 0;
    this.totalVotes = 0;
  }

  onTitleClicked(event) {
    console.log('The title was clicked', event);
  }

  hello(name: string): string {
    return `Hello ${name}`;
  }

  addJoke() {
    this.jokeService.getJoke().subscribe(joke => {
      this.jokes.push(joke);
    }, err => {
      console.warn('Could not get new joke', err);
    });
    
  }

  onJokeVoted(joke: Joke) {
    this.totalVotes++;
    if (joke.votes > this.bestVote) {
      this.bestVote = joke.votes;
    }
  }

  clearVotes() {
    this.bestVote = 0;
    this.totalVotes = 0;
    this.jokes.forEach(joke => joke.votes = 0);
  }

  displayGreeting(form: NgForm) {
    if (form.valid) {
      this.displayedGreeting = this.greeting;
      console.log('Greeting displayed');
    }
  }
}
