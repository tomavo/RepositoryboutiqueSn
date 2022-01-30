package com.example.demoboutique.repositories;

import com.example.demoboutique.models.Produits;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProduitsRepository extends JpaRepository<Produits, Long> {
}
