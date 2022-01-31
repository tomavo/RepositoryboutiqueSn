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

  getAllCategories(): Observable<any> {
    return this.http.get(environment.BASE_URL + 'categories/liste', {});
  }

  saveProduit(produit: any): Observable<any> {
    return this.http.post(environment.BASE_URL + 'produit/save', JSON.stringify(produit), this.utilsService.getHttpPostHeaderForResource());
  }

  editProduit(produit: any): Observable<any> {
    return this.http.post(environment.BASE_URL + 'produit/edit', JSON.stringify(produit), this.utilsService.getHttpPostHeaderForResource());
  }

  deleteProduit(produitId: any) {
    return this.http.get(environment.BASE_URL + 'produit/delete/' +produitId,  {});
  }

  getProduitById(produitId: number): Observable<any> {
    return this.http.get(environment.BASE_URL + 'produit/get-by-id/' +produitId, {});
  }

}
