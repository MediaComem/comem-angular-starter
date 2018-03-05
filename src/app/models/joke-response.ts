export class JokeResponse {
    type: string;
    value: JokeResponseValue;
  }
  export class JokeResponseValue {
    categories: string[];
    id: number;
    joke: string;
  }