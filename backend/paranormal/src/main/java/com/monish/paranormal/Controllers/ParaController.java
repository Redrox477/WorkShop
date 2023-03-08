package com.monish.paranormal.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.PutMapping;

import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.monish.paranormal.Models.Paradata;
import com.monish.paranormal.Services.ParaService;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")

public class ParaController {

@Autowired
private ParaService ps;

@PostMapping("/addCaseDetails")

public Paradata postDetails(@RequestBody Paradata p)

{

return ps.addDetails(p);


}

@GetMapping ("/getCaseDetails")

public List<Paradata>getDetails()

{

return ps.getAllDetails();

}

@PutMapping("/update/{Case_No}")

public Paradata putDetails (@PathVariable("Case_No") int Case_No,@RequestBody Paradata s)

{

return ps.changeDetails(Case_No,s);

}

@DeleteMapping("/delCase/{Case_No}")

public String deletedetails(@PathVariable("Case_No") int Case_No)

{

return ps.deleteCaseByNo(Case_No);

}



}
