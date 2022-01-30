package com.example.demoboutique.controllers;

import com.example.demoboutique.models.Produits;
import com.example.demoboutique.repositories.ProduitsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/")
public class ProduitsController {

    @Autowired
    private ProduitsRepository produitsRepository;

    @RequestMapping(value = {"produits/liste"},method = RequestMethod.GET)
    public ResponseEntity<?> getAllProduits()
    {
        List<Produits> produits = new ArrayList<Produits>();

        produits = produitsRepository.findAll();

        return ResponseEntity.ok(produits
        );
    }

}
