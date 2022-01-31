import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesProduits } from 'src/app/models/categories-produits';
import { Produits } from 'src/app/models/produits';
import { User } from 'src/app/models/user';
import { ProduitsService } from 'src/app/services/produits.service';
import { UtilsService } from 'src/app/services/utils.service';
import { environment } from 'src/environments/environment';
declare var $: any;

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  listeCategoriesProduits: Array<CategoriesProduits> = [];
  form: FormGroup;
  formSubmitted = false;
  environment = environment;
  produitId: any;
  produit: Produits = new Produits();
  modalTitle: string = '';
  isEdit: boolean = false;

  constructor(private produitsService: ProduitsService, private utilsService: UtilsService,
    private router: Router, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) { 
      this.form = formBuilder.group(
        {
          libelle: ['',Validators.required],
          presentation: ['',Validators.required],
          prix: ['',Validators.required],
          quantite: ['',Validators.required],
          categorie: ['',Validators.required]
        }
      )
     }

  ngOnInit(): void {
    this.getAllCategories();
    this.getParamValue();
  }


  getParamValue(): void {
    this.produitId = this.activatedRoute.snapshot.params["produitId"]
      if ( !(this.produitId || '').length) {
        this.isAddingNewProduit();
        return;
      }
      else {
        this.modalTitle = 'Modification d\'un produit';
        this.getProduitById(this.produitId);
      }
  }

  getProduitById(produitId: any){
    this.produitsService.getProduitById(produitId).subscribe({
      next: value =>{
        if(value !== null){
          console.log(value);
          this.produit = value;
          this.isEditingProduit(this.produit);
        }
      },
      error: err =>{
        
      },
      complete: () => {
        
      }
    });
  }

  onSubmit(){
    this.formSubmitted = true;
    let categorie: CategoriesProduits = new CategoriesProduits();
    categorie.id = this.form.get('categorie')?.value;
    let userSending: User = new User();
    userSending.id = 1;
    let produit: any = {
      libelle: this.form.get('libelle')?.value,
      presentation: this.form.get('presentation')?.value,
      prix: this.form.get('prix')?.value,
      quantite: this.form.get('quantite')?.value,
      categorie: categorie,
      user: userSending
    }

  
    if (this.form.valid) {
      if (this.isEdit){
        this.saveProduit(produit);
        console.log(produit);
      } else {
        produit.produit_id = this.produitId
        console.log(produit);
        this.editProduit(produit);
      }

    }

  }

  editProduit(produit: any): void {
    this.produitsService.editProduit(produit).subscribe({
      next: value => { // success
        
      },
      error: err => { // erreur
        this.router.navigate(['/produits/liste']);
      },
      complete: () => { // fin de la requete
        
      }
    });
  }

  saveProduit(produit: any): void {
    this.produitsService.saveProduit(produit).subscribe({
      next: value => { // success
        
      },
      error: err => { // erreur
        this.router.navigate(['/produits/liste']);
      },
      complete: () => { // fin de la requete
        
      }
    });
  }

  getAllCategories() {
    this.produitsService.getAllCategories().subscribe({
      next: value => { // success
        console.log(value);
        this.listeCategoriesProduits = value;
      },
      error: err => { // erreur


      },
      complete: () => { // fin de la requete

      }
    });
  }

  isAddingNewProduit() {
    this.modalTitle = 'Nouveau produit';
    this.isEdit = true;
  }

  isEditingProduit(produit: Produits) {
    this.form.get('libelle')?.setValue(produit.libelle);
    this.form.get('presentation')?.setValue(produit.presentation);
    this.form.get('prix')?.setValue(produit.prix);
    this.form.get('quantite')?.setValue(produit.quantite);
  }

}
