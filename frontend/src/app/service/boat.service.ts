import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Boat } from '../model/boat';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class BoatService extends BaseService<Boat> {

  constructor(
    public config: ConfigService,
    public http: HttpClient,

  ) {
    super(config, http)
    this.entity = 'boats'
  }
}
