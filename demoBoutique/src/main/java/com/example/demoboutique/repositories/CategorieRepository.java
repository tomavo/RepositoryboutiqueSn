package com.example.demoboutique.repositories;

import com.example.demoboutique.models.CategoriesProduits;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategorieRepository extends JpaRepository<CategoriesProduits, Long> {
}
