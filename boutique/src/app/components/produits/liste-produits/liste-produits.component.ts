import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {ProduitsService} from "../../../services/produits.service";
import {Produits} from "../../../models/produits";

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {

  listeProduits: Array<Produits> = [];
  produit: Produits = new Produits();

  constructor(private produitsService: ProduitsService) { }

  ngOnInit(): void {
  }

  getUserConnectedByUsername(username: string) { // load user by username
    this.produitsService.getAllProduits().subscribe({
      next: value => { // success
        console.log(value);
      },
      error: err => { // erreur


      },
      complete: () => { // fin de la requete

      }
    });
  }

}
