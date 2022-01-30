package com.example.demoboutique.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "CATEGORIES")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class CategoriesProduits {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "CATEGORIES_SEQ")
    @SequenceGenerator(name = "CATEGORIES_SEQ",sequenceName = "CATEGORIES_SEQ",allocationSize = 1)
    private Long id;

    private String libelle;

    /*@OneToMany(mappedBy = "categorie")
    private List<Produits> produits;*/

    private int statut = 1;

    private String dateAjout;


}
