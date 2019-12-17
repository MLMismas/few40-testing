import { Injectable } from '@angular/core';

@Injectable()
export class DefaultsService {
  _default = 'Tacos';

  getDefault() {
    return this._default;
  }
}
