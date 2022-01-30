package com.example.demoboutique.repositories;

import com.example.demoboutique.models.Produits;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProduitsRepository extends JpaRepository<Produits, Long> {
    List<Produits> findAllByStatut(int statut);
}
