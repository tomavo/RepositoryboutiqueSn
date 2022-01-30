package com.example.demoboutique.repositories;

import com.example.demoboutique.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
