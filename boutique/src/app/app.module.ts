import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProduitComponent } from './components/produits/add-produit/add-produit.component';
import { ListeProduitsComponent } from './components/produits/liste-produits/liste-produits.component';
import { AddCategorieComponent } from './components/categories-produits/add-categorie/add-categorie.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AddProduitComponent,
    ListeProduitsComponent,
    AddCategorieComponent,
    AccueilComponent,
    NavigationComponent,
    FooterComponent,
    AddCategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
