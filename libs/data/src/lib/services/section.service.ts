import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '@reaction/common/models';

@Injectable()
export class SectionService {
  constructor(private _store: Store<RootState>) {}
}
