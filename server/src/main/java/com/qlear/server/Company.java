package com.qlear.server;

public class Company {
    private String name;

    // I DO NOT KNOW WHY I HAVE TO HAVE DESERIALIZATION FOR THIS TO WORK BUT NOT FOR TAGOS
    public Company() {}

    public Company(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }
}
