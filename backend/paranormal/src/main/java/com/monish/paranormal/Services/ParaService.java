package com.monish.paranormal.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.monish.paranormal.Models.Paradata;
import com.monish.paranormal.Repositories.ParaRepo;

@Service

public class ParaService {
	
@Autowired
private ParaRepo pr;

public List<Paradata> getAllDetails(){
	return pr.findAll();
}

public Paradata addDetails(Paradata p) {
	return pr.save(p);
}

public Paradata changeDetails(int No,Paradata p)

{

Paradata pd=pr.findById(No).orElse(null);


pd.setCaseno(p.getCaseno());

pd.setSubname(p.getSubname());

pd.setSubage(p.getSubage());

pd.setSubact(p.getSubact());

pd.setPrievi(p.getPrievi());

pd.setSecevi(p.getSecevi());

pd.setGhoty(p.getGhoty());

pd.setGovb(p.getGovb());

pd.setStat(p.getStat());

return pr.save(pd);

}

public String deleteCaseByNo(int No)

{

	pr.deleteById(No);
	return "Data deleted !";

}

}
