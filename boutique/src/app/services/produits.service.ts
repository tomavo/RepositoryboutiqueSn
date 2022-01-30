import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Observable} from "rxjs";
import {UtilsService} from "./utils.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  constructor(private http: HttpClient, private utilsService: UtilsService) { }

  getAllProduits(): Observable<any> {
    return this.http.get(environment.BASE_URL + 'produits/liste', {});
  }
}
