package com.monish.paranormal.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.monish.paranormal.Models.Paradata;

import jakarta.transaction.Transactional;

public interface ParaRepo extends JpaRepository<Paradata, Integer> {

}