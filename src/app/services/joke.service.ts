import { Injectable } from '@angular/core';
import { Joke } from '../models/joke';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/of';
import { JokeResponse } from '../models/joke-response';
import { map } from 'rxjs/operators';

@Injectable()
export class JokeService {

  constructor(private httpClient: HttpClient) { }

  getJoke(): Observable<Joke> {
    return this.httpClient
      .get<JokeResponse>('https://api.icndb.com/jokes/random')
      .pipe(map(convertJokeResponseToJoke));
  }

}

function convertJokeResponseToJoke(response: JokeResponse): Joke {
  return {
    text: response.value.joke,
    votes: 0
  };
}