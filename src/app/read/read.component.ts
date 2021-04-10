import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';
import { RemoveTutorial } from '../redux/actions/tutorial.actions';
import { TutorialState } from '../redux/state/tutorial.state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  // tutorials$: Observable<Tutorial>;
  @Select(TutorialState.getTutorials) tutorials$: Observable<Tutorial>;

  constructor(private store: Store) {
    // this.tutorials$ = this.store.select(state => state.tutorials.tutorials);
  }

  ngOnInit(): void {
  }

  delTutorial(name) {
    this.store.dispatch(new RemoveTutorial(name));
  }

}

/*
  tutorials$: Observable<Tutorial>;

  constructor(private store: Store) {
      this.tutorials$ = this.store.select(state => state.tutorials.tutorials);
  }

  this is equal to

  @Select(TutorialState.getTutorials) tutorials$: Observable<Tutorial>;
*/
