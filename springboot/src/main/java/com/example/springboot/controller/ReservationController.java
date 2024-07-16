package com.example.springboot.controller;

import com.example.springboot.entity.Reservation;
import com.example.springboot.service.ReservationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reservation/v1")
@RequiredArgsConstructor
@Validated
@CrossOrigin(origins = "http://localhost:5173")
public class ReservationController {
    private final ReservationService reservationService;

    @GetMapping("/")
    public ResponseEntity<List<Reservation>> getAllReservations() {
        return ResponseEntity.ok().body(reservationService.getAllReservations());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Reservation> getReservationById(@PathVariable Integer id) {
        return ResponseEntity.ok().body(reservationService.getReservationById(id));
    }

    @PostMapping("/")
    public ResponseEntity<Reservation> saveReservation(@RequestBody Reservation reservation) {
        return ResponseEntity.ok().body(reservationService.saveReservation(reservation));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteReservationById(@PathVariable Integer id) {
        reservationService.deleteReservationById(id);
        return ResponseEntity.ok().body("Deleted reservation success");
    }
}