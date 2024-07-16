package com.example.springboot.service;

import com.example.springboot.entity.Reservation;
import com.example.springboot.repository.ReservationRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class ReservationService {
    private final ReservationRepo reservationRepo;

    public List<Reservation> getAllReservations() {
        return reservationRepo.findAll();
    }

    public Reservation getReservationById(Integer id) {
        Optional<Reservation> optionalReservation = reservationRepo.findById(id);
        if(optionalReservation.isPresent()){
            return optionalReservation.get();
        }
        log.info("Feedback with id: {} doesn't exist", id);
        return null;
    }

    public Reservation saveReservation (Reservation reservation){
       Reservation savedReservation = reservationRepo.save(reservation);

        log.info("Feedback with id: {} saved successfully", reservation.getId());
        return savedReservation;
    }

    public void deleteReservationById (Integer id) {
        reservationRepo.deleteById(id);
    }

}
