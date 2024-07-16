package com.example.springboot.repository;

import com.example.springboot.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
public interface ReservationRepo extends JpaRepository<Reservation, Integer>{
}
