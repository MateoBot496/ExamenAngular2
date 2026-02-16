import { Component } from '@angular/core';
import { Series } from '../../services/series';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  series$: Observable<any>;

  constructor(private seriesService: Series) {
    this.series$ = this.seriesService.getSeries();
  }


}
