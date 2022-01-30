import {CategoriesProduits} from "./categories-produits";
import { User } from "./user";

export class Produits {
  id: string = '';
  libelle: string = '';
  presentation: string = '';
  prix: string = '';
  picture: string = '';
  statut: number = 0;
  categorie: CategoriesProduits = new CategoriesProduits();
  user: User = new User();
  dateAjout: string = '';
  quantite: string = '';

}
