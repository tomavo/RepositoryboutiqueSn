package com.example.demoboutique.controllers;

import com.example.demoboutique.models.CategoriesProduits;
import com.example.demoboutique.models.Produits;
import com.example.demoboutique.models.User;
import com.example.demoboutique.repositories.CategorieRepository;
import com.example.demoboutique.repositories.ProduitsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/")
public class ProduitsController {

    @Autowired
    private ProduitsRepository produitsRepository;

    @Autowired
    private CategorieRepository categorieRepository;

    @RequestMapping(value = {"produits/liste"},method = RequestMethod.GET)
    public ResponseEntity<?> getAllProduits()
    {
        List<Produits> produits = new ArrayList<Produits>();

        produits = produitsRepository.findAllByStatut(1);

        return ResponseEntity.ok(produits
        );
    }

    @RequestMapping(value = {"categories/liste"},method = RequestMethod.GET)
    public ResponseEntity<?> getAllCategories()
    {
        List<CategoriesProduits> categoriesProduits = new ArrayList<CategoriesProduits>();

        categoriesProduits = categorieRepository.findAll();

        return ResponseEntity.ok(categoriesProduits
        );
    }

    @RequestMapping(value = {"produit/save"},method = RequestMethod.POST)
    public ResponseEntity<?> saveProduit(@RequestBody Produits produitSent)
    {

        Produits produits = new Produits();
        DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy à HH:mm");
        Date actualDate = new Date();
        System.out.println(dateFormat.format(actualDate));

        String actualDateString = dateFormat.format(actualDate);

        /*User user = new User(1L,"Ulrich","Fidel");
        CategoriesProduits categoriesProduits = new CategoriesProduits(1L,"Cahier",1, "");*/

        produits.setLibelle(produitSent.getLibelle());
        produits.setPrix(produitSent.getPrix());
        produits.setPresentation(produitSent.getPresentation());
        produits.setQuantite(produitSent.getQuantite());
        produits.setCategorie((produitSent.getCategorie()));
        produits.setUser((produitSent.getUser()));
        produits.setDateAjout(actualDateString);

        produitsRepository.save(produits);
        return ResponseEntity.ok("Produit créée avec succès"
        );
    }

    @RequestMapping(value = {"produit/edit"},method = RequestMethod.POST)
    public ResponseEntity<?> editProduit(@RequestBody Produits produitSent)
    {

        Produits produits = new Produits();
        produits = produitsRepository.findById(produitSent.getProduit_id()).get();

        DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm");
        Date actualDate = new Date();
        System.out.println(dateFormat.format(actualDate));

        String actualDateString = dateFormat.format(actualDate);

        produits.setLibelle(produitSent.getLibelle());
        produits.setPrix(produitSent.getPrix());
        produits.setPresentation(produitSent.getPresentation());
        produits.setQuantite(produitSent.getQuantite());
        produits.setCategorie((produitSent.getCategorie()));
        produits.setUser((produitSent.getUser()));

        produitsRepository.save(produits);
        return ResponseEntity.ok("Produit créée avec succès"
        );
    }

    @RequestMapping(value = {"produit/get-by-id/{produitId}"},method = RequestMethod.GET)
    public ResponseEntity<?> getUserById(@PathVariable(name="produitId") Long produitId)
    {

            Produits produit = new Produits();
            produit = produitsRepository.findById(produitId).get();

            return ResponseEntity.ok(produit);

    }

    @RequestMapping(value = {"produit/delete/{produitId}"},method = RequestMethod.GET)
    public ResponseEntity<?> deleteProduit(@PathVariable(name="produitId") Long produitId)
    {

        Produits produit = new Produits();
        produit = produitsRepository.findById(produitId).get();

        produit.setStatut(0);
        produitsRepository.save(produit);

        return ResponseEntity.ok(produit);

    }

}
