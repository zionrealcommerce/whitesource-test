import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ApiService} from '../../api.service';
import {catchError, finalize, map, mergeMap} from 'rxjs/operators';
import {of, throwError} from 'rxjs';
import {GeneralPopupComponent} from '../../share/general-popup/general-popup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public showPopup = false;
  @ViewChild('generalPopup', {static: false}) generalPopup: GeneralPopupComponent;
  public radioControl = new FormControl();
  public radioItems: any[] = [
    {
      value: 1,
      selected: false,
    },
    {
      value: 2,
      selected: false,
    },
    {
      value: 3,
      selected: false,
    },
  ];

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {

    this.api.initData().pipe(
      mergeMap((data) => {
        return of(data);
      }),
      catchError((err) => {
        return throwError(err);
      }),
      finalize(() => {

      })
    ).subscribe();
    // this.api.getJoke();
    // this.api.getJoke().pipe(
    //   mergeMap((data) => {
    //     console.log('data', data); //
    //     return of(data);
    //   })
    // );
  }

}
