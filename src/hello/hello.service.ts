import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class HelloService {
  constructor(private httpService: HttpService) {}

  hello() {
    return this.httpService.get('http://localhost:3000/hello').pipe(map(response => response.data));
  }
}
