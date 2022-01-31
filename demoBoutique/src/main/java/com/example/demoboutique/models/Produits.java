package com.example.demoboutique.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import net.bytebuddy.implementation.bind.annotation.IgnoreForBinding;

import javax.persistence.*;

@Entity
@Table(name = "PRODUITS")
@Getter //il genere en meme temps les getter de tout les attributs de la class , grâce à lomnok
@Setter //il genere en meme temps les setter de tout les attributs de la class , grâce à lombok
@ToString
@NoArgsConstructor @AllArgsConstructor
public class Produits {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "PRODUITS_SEQ")
    @SequenceGenerator(name = "PRODUITS_SEQ",sequenceName = "PRODUITS_SEQ",allocationSize = 1)
    private Long id;

    private String libelle;

    private String presentation;

    private int prix;

    private String picture;

    private int statut = 1;

    private String dateAjout;

    private int quantite;

    @ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(name="categorie_id")
    @JsonIgnoreProperties(value = {"produits"})
    private CategoriesProduits categorie;

    @ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(name="user_id")
    @JsonIgnoreProperties(value = {"produits"})
    private User user;

    private Long produit_id;

}
