import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Images } from './models/images.model';
import { AppState } from './store/app.state';
import * as ImagesActions from './actions/images.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  images: Observable<Images[]>;
  score: Observable<number>;
  topScore: Observable<number>;

  constructor(private store: Store<AppState>) {
    
  }

  ngOnInit() {
     this.store.select('images')
    .subscribe(images => {
      this.images = images.imgData;
      // console.log(images.imgData);
    });
    this.store.select('images')
      .subscribe(images => {
        console.log(images.score);
        this.score = images.score;
      });

    this.store.select('images')
      .subscribe(images => {
        this.topScore = images.topScore;
      });
  }

  onClick(index: number) {
    this.store.dispatch(new ImagesActions.UpdateImages(index));
    this.store.dispatch(new ImagesActions.UpdateScore());
    this.store.dispatch(new ImagesActions.UpdateTopScore());
    this.store.dispatch(new ImagesActions.ShuffleImages());
    // console.log(`i have been clicked: ${index}`)
  }
  
}
