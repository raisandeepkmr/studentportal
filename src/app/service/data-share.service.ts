import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
  private messageSource = new BehaviorSubject("login")
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeAuthLevel(message: string) {
    this.messageSource.next(message)
  }
}
