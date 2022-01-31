import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {ProduitsService} from "../../../services/produits.service";
import {Produits} from "../../../models/produits";
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {

  listeProduits: Array<Produits> = [];
  produitSelected: Produits = new Produits();

  constructor(private produitsService: ProduitsService, private router: Router) { }

  ngOnInit(): void {
    this.getAllProduits();
  }

  getAllProduits() {
    this.produitsService.getAllProduits().subscribe({
      next: value => { // success
        console.log(value);
        this.listeProduits = value;
      },
      error: err => { // erreur


      },
      complete: () => { // fin de la requete

      }
    });
  }

  jumpToProduitEdit(produitId: any) {
    this.router.navigate(['/produits/modifier/'+produitId]);
  }

  bindDataInModal(produit: Produits) {
    this.produitSelected = produit;
    console.log(this.produitSelected);
  }

  deleteProduct() {
    console.log(this.produitSelected);
    this.produitsService.deleteProduit(this.produitSelected.id).subscribe({
      next: value => { // success
        $('#suppressionModal').modal('toggle');
        this.getAllProduits();
      },
      error: err => { // erreur


      },
      complete: () => { // fin de la requete

      }
    });
  }

}
