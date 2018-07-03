package repository;

import org.springframework.data.jpa.repository.JpaRepository;

import entity.MaintenceRequest;


public interface MaintenceRequestRepository extends JpaRepository<MaintenceRequest, String> {

}
