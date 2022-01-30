import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  getHttpPostHeaderForResource() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  openFileInBrowserTargetBlank(data: any): void {
    var file = new Blob([data], {type: 'application/pdf'});
    const fileURL = window.URL.createObjectURL(file);
    window.open(fileURL, '_blank');
  }

}
