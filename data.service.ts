import { Injectable } from '@angular/core';
import { SubService } from './sub.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(subService: SubService) { }

}
