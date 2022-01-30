import {CategoriesProduits} from "./categories-produits";

export class Produits {
  id: string = '';
  libelle: string = '';
  presentation: string = '';
  prix: string = '';
  picture: string = '';
  statut: number = 0;
  categorie: CategoriesProduits = new CategoriesProduits();
  dateAjout: string = '';

}
