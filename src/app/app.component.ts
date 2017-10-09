import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAy7D0zdKpE0AJERpsuV_ZLKfQWDTaeXPg",
      authDomain: "angular-recipe-book-cf2d2.firebaseapp.com"
    });
  }
}
