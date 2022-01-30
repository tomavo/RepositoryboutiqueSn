package com.example.demoboutique.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import net.bytebuddy.implementation.bind.annotation.IgnoreForBinding;

import javax.persistence.*;

@Entity
@Table(name = "PRODUITS")
@Getter
@Setter
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
    private CategoriesProduits categorie;

    @ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(name="user_id")
    private User user;

    /*@JsonIgnore
    private int categorie_id;

    @JsonIgnore
    private int user_id;*/

}
