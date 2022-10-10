import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  today=new Date();
  
  constructor() { }

  log(message: string, level: string): void {
    console.log(`${this.today} : [$level] -- ${message}`);
  }
}
