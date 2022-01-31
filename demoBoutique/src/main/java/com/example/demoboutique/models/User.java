package com.example.demoboutique.models;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "USERS")
@Getter
@Setter
@ToString
@NoArgsConstructor @AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "USERS_SEQ")
    @SequenceGenerator(name = "USERS_SEQ",sequenceName = "USERS_SEQ",allocationSize = 1)
    private Long id;

    private String nom;

    private String prenom;

    @OneToMany(mappedBy = "user")
    private List<Produits> produits;
}
