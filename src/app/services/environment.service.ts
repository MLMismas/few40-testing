import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Environment } from '../../environments/models';

@Injectable()
export class EnvironmentService implements Environment {
  production = environment.production;
  apiUrl = environment.apiUrl;
}
