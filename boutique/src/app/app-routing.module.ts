import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListeProduitsComponent} from "./components/produits/liste-produits/liste-produits.component";
import {AddProduitComponent} from "./components/produits/add-produit/add-produit.component";
import {AddCategorieComponent} from "./components/categories-produits/add-categorie/add-categorie.component";
import {AccueilComponent} from "./components/accueil/accueil.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {FooterComponent} from "./components/footer/footer.component";


const routes: Routes = [

  { path: 'produits/liste', component: ListeProduitsComponent },
  { path: 'produits/ajout', component: AddProduitComponent },
  { path: 'produits/modifier/:produitId', component: AddProduitComponent },
  { path: 'produits/categorie/ajout', component: AddCategorieComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'footer', component: FooterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
