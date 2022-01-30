export class User {
  id: string = '';
  nom: string = '';
  prenom: string = '';

  public User(id: string, nom:string, prenom: string) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
  }
}


