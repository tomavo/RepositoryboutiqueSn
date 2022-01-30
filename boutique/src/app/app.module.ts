import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProduitComponent } from './components/produits/add-produit/add-produit.component';
import { ListeProduitsComponent } from './components/produits/liste-produits/liste-produits.component';
import { AddCategorieComponent } from './components/categories-produits/add-categorie/add-categorie.component';
<<<<<<< HEAD
import { AccueilComponent } from './components/accueil/accueil.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
=======
>>>>>>> 1f7ec0a5b567a2663e9e7543111e3b372e11255e

@NgModule({
  declarations: [
    AppComponent,
    AddProduitComponent,
    ListeProduitsComponent,
<<<<<<< HEAD
    AddCategorieComponent,
    AccueilComponent,
    NavigationComponent,
    FooterComponent
=======
    AddCategorieComponent
>>>>>>> 1f7ec0a5b567a2663e9e7543111e3b372e11255e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
