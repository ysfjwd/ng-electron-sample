import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RootState } from '@reaction/common/models';
import { actions } from '@reaction/common';
import { dataServices } from '@reaction/data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'reaction-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit {
  constructor(private _store: Store<RootState>, private _config: dataServices.ConfigService) {}

  ngOnInit() {
    this._store.dispatch(new actions.GetConfig());
  }
}
