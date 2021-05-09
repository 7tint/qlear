package com.qlear.server;

import java.util.Arrays;

import com.google.gson.Gson;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
public class CompanyController {
    @Value("${ASTRA_DB_ID}")
    private String ASTRA_DB_ID;
    @Value("${ASTRA_DB_REGION}")
    private String ASTRA_DB_REGION;
    @Value("${ASTRA_DB_KEYSPACE}")
    private String ASTRA_DB_KEYSPACE;
    @Value("${ASTRA_DB_APPLICATION_TOKEN}")
    private String ASTRA_DB_APPLICATION_TOKEN;

    // collection-id is company (for astra)

    @GetMapping("/companies")
    public ResponseEntity<String> all() {
        // Create uri with env variables.
        String uri = "https://" + ASTRA_DB_ID + "-" + ASTRA_DB_REGION +
                ".apps.astra.datastax.com/api/rest/v2/namespaces/" +
                ASTRA_DB_KEYSPACE + "/collections/company?page-size=20";

        // Call The DataStax Astra API
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        headers.set("X-Cassandra-Token", ASTRA_DB_APPLICATION_TOKEN);
        HttpEntity<String> entity = new HttpEntity<String>(headers);
        ResponseEntity<String> res = restTemplate.exchange(uri, HttpMethod.GET, entity, String.class);

        return res;
    }

    @GetMapping("/companies/{id}")
    public ResponseEntity<String> company(@PathVariable("id") String id) {
        // Create uri with env variables.
        String uri = "https://" + ASTRA_DB_ID + "-" + ASTRA_DB_REGION +
                ".apps.astra.datastax.com/api/rest/v2/namespaces/" +
                ASTRA_DB_KEYSPACE + "/collections/company/" + id;

        // Call The DataStax Astra API
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        headers.set("X-Cassandra-Token", ASTRA_DB_APPLICATION_TOKEN);
        HttpEntity<String> entity = new HttpEntity<String>(headers);
        ResponseEntity<String> res = restTemplate.exchange(uri, HttpMethod.GET, entity, String.class);

        return res;
    }

    @GetMapping("/companies/{id}/tags")
    public ResponseEntity<String> tags(@PathVariable("id") String id) {
        // Create uri with env variables.
        String where = "{\"companyId\":{\"$eq\":\"" + id + "\"}}"; // r u fkin kidding me
        String uri = "https://" + ASTRA_DB_ID + "-" + ASTRA_DB_REGION +
                ".apps.astra.datastax.com/api/rest/v2/namespaces/" +
                ASTRA_DB_KEYSPACE + "/collections/tag?where={where}&page-size=20";

        // Call The DataStax Astra API
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        headers.set("X-Cassandra-Token", ASTRA_DB_APPLICATION_TOKEN);
        HttpEntity<String> entity = new HttpEntity<String>(headers);
        ResponseEntity<String> res = restTemplate.exchange(uri, HttpMethod.GET, entity, String.class, where); // I needed a placeholder here ff

        return res;
    }

    @PostMapping("/companies")
    public ResponseEntity<String> create(@RequestBody Company newCompany) {
        String uri = "https://" + ASTRA_DB_ID + "-" + ASTRA_DB_REGION +
                ".apps.astra.datastax.com/api/rest/v2/namespaces/" +
                ASTRA_DB_KEYSPACE + "/collections/company";

        String newCompanyJsonInString = new Gson().toJson(newCompany);

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("X-Cassandra-Token", ASTRA_DB_APPLICATION_TOKEN);
        HttpEntity<String> entity = new HttpEntity<String>(newCompanyJsonInString, headers);
        ResponseEntity<String> res = restTemplate.exchange(uri, HttpMethod.POST, entity, String.class);

        //returns id of newCompany
        return res;
    }

    @PutMapping("/companies/{id}")
    public ResponseEntity<String> update(@PathVariable("id") String id, @RequestBody Company updatedCompany) {

        String uri = "https://" + ASTRA_DB_ID + "-" + ASTRA_DB_REGION +
                ".apps.astra.datastax.com/api/rest/v2/namespaces/" +
                ASTRA_DB_KEYSPACE + "/collections/company/" + id;

        String newCompanyJsonInString = new Gson().toJson(updatedCompany);

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("X-Cassandra-Token", ASTRA_DB_APPLICATION_TOKEN);
        HttpEntity<String> entity = new HttpEntity<String>(newCompanyJsonInString, headers);
        ResponseEntity<String> res = restTemplate.exchange(uri, HttpMethod.PUT, entity, String.class);

        //returns id of updatedCompany (same id)
        return res;
    }

    @DeleteMapping("/companies/{id}")
    public ResponseEntity<String> delete(@PathVariable("id") String id) {

        String uri = "https://" + ASTRA_DB_ID + "-" + ASTRA_DB_REGION +
                ".apps.astra.datastax.com/api/rest/v2/namespaces/" +
                ASTRA_DB_KEYSPACE + "/collections/company/" + id;

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("X-Cassandra-Token", ASTRA_DB_APPLICATION_TOKEN);
        HttpEntity<String> entity = new HttpEntity<String>(headers);
        ResponseEntity<String> res = restTemplate.exchange(uri, HttpMethod.DELETE, entity, String.class);

        //returns nothing
        return res;
    }
}
