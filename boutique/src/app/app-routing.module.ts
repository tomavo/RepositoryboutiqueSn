import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListeProduitsComponent} from "./components/produits/liste-produits/liste-produits.component";
import {AddProduitComponent} from "./components/produits/add-produit/add-produit.component";
import {AddCategorieComponent} from "./components/categories-produits/add-categorie/add-categorie.component";

const routes: Routes = [

  { path: 'produits/liste', component: ListeProduitsComponent },
  { path: 'produits/ajout', component: AddProduitComponent },
  { path: 'produits/modifier/:produitId', component: AddProduitComponent },
  { path: 'produits/categorie/ajout', component: AddCategorieComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
