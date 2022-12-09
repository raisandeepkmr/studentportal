import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
  private messageSource = new BehaviorSubject("login")
  private showMessageSource = new BehaviorSubject("message")
  currentMessage = this.messageSource.asObservable();
  showCurrentMessage = this.showMessageSource.asObservable();

  constructor() { }

  changeAuthLevel(message: string) {
    this.messageSource.next(message)
  }

  showMessage(message: string) {
    this.showMessageSource.next(message)
  }
}
