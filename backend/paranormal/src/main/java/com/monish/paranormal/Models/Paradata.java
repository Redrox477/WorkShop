package com.monish.paranormal.Models;

import jakarta.persistence.Column;

import jakarta.persistence.Entity;

import jakarta.persistence.Id;

import jakarta.persistence.Table;

@Entity

@Table(name="ParanormalCases")

public class Paradata {
	
@Id

@Column(name="CaseNo")

private int caseno;

@Column(name="SubjectName")

private String subname ;

@Column(name="SubjectAge")

private int subage;

@Column(name="SubjectActivity")

private String subact;

@Column(name="PrimaryEvidence")

private String prievi;

@Column(name="SecondaryEvidence")

private String secevi ;

@Column(name="GhostType")

private String ghoty ;

@Column(name="GoverningBody")

private String govb ;

@Column(name="CaseStatus")

private String stat;


public Paradata() {};

public Paradata(int caseno , String subname , int subage , String subact , String prievi , String secevi , String ghoty , String govb , String stat) {
	super();
	this.caseno = caseno;
	this.subname = subname;
	this.subage = subage;
	this.subact = subact ;
	this.prievi = prievi ;
	this.secevi = secevi ;
	this.ghoty = ghoty ;
	this.govb = govb ;
	this.stat = stat;
}

public int getCaseno() {
	return caseno;
}

public void setCaseno(int caseno) {
	this.caseno = caseno;
}

public String getSubname() {
	return subname;
}

public void setSubname(String subname) {
	this.subname = subname;
}

public int getSubage() {
	return subage;
}

public void setSubage(int subage) {
	this.subage = subage;
}

public String getSubact() {
	return subact;
}

public void setSubact(String subact) {
	this.subact = subact;
}

public String getPrievi() {
	return prievi;
}

public void setPrievi(String prievi) {
	this.prievi = prievi;
}

public String getSecevi() {
	return secevi;
}

public void setSecevi(String secevi) {
	this.secevi = secevi;
}

public String getGhoty() {
	return ghoty;
}

public void setGhoty(String ghoty) {
	this.ghoty = ghoty;
}

public String getGovb() {
	return govb;
}

public void setGovb(String govb) {
	this.govb = govb;
}

public String getStat() {
	return stat;
}

public void setStat(String stat) {
	this.stat = stat;
}



}


