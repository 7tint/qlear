package com.qlear.server;

import java.util.Arrays;

import com.google.gson.Gson;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
public class TagController {
    @Value("${ASTRA_DB_ID}")
    private String ASTRA_DB_ID;
    @Value("${ASTRA_DB_REGION}")
    private String ASTRA_DB_REGION;
    @Value("${ASTRA_DB_KEYSPACE}")
    private String ASTRA_DB_KEYSPACE;
    @Value("${ASTRA_DB_APPLICATION_TOKEN}")
    private String ASTRA_DB_APPLICATION_TOKEN;

    // collection-id is tag (for astra)

    @GetMapping("/tags")
    public ResponseEntity<String> all() {
        // Create uri with env variables.
        String uri = "https://" + ASTRA_DB_ID + "-" + ASTRA_DB_REGION +
                ".apps.astra.datastax.com/api/rest/v2/namespaces/" +
                ASTRA_DB_KEYSPACE + "/collections/tag?page-size=20";

        // Call The DataStax Astra API
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        headers.set("X-Cassandra-Token", ASTRA_DB_APPLICATION_TOKEN);
        HttpEntity<String> entity = new HttpEntity<String>(headers);
        ResponseEntity<String> res = restTemplate.exchange(uri, HttpMethod.GET, entity, String.class);

        return res;
    }

    @GetMapping("/tags/{id}")
    public ResponseEntity<String> tag(@PathVariable("id") String id) {
        // Create uri with env variables.
        String uri = "https://" + ASTRA_DB_ID + "-" + ASTRA_DB_REGION +
                ".apps.astra.datastax.com/api/rest/v2/namespaces/" +
                ASTRA_DB_KEYSPACE + "/collections/tag/" + id;

        // Call The DataStax Astra API
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        headers.set("X-Cassandra-Token", ASTRA_DB_APPLICATION_TOKEN);
        HttpEntity<String> entity = new HttpEntity<String>(headers);
        ResponseEntity<String> res = restTemplate.exchange(uri, HttpMethod.GET, entity, String.class);

        return res;
    }

    @PostMapping("/tags")
    public ResponseEntity<String> create(@RequestBody Tag newTag) {
        String uri = "https://" + ASTRA_DB_ID + "-" + ASTRA_DB_REGION +
                ".apps.astra.datastax.com/api/rest/v2/namespaces/" +
                ASTRA_DB_KEYSPACE + "/collections/tag";

        String newTagJsonInString = new Gson().toJson(newTag);

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("X-Cassandra-Token", ASTRA_DB_APPLICATION_TOKEN);
        HttpEntity<String> entity = new HttpEntity<String>(newTagJsonInString, headers);
        ResponseEntity<String> res = restTemplate.exchange(uri, HttpMethod.POST, entity, String.class);

        //returns id of newTag
        return res;
    }

    @PutMapping("/tags/{id}")
    public ResponseEntity<String> update(@PathVariable("id") String id, @RequestBody Tag updatedTag) {

        String uri = "https://" + ASTRA_DB_ID + "-" + ASTRA_DB_REGION +
                ".apps.astra.datastax.com/api/rest/v2/namespaces/" +
                ASTRA_DB_KEYSPACE + "/collections/tag/" + id;

        String updatedTagJsonInString = new Gson().toJson(updatedTag);

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("X-Cassandra-Token", ASTRA_DB_APPLICATION_TOKEN);
        HttpEntity<String> entity = new HttpEntity<String>(updatedTagJsonInString, headers);
        ResponseEntity<String> res = restTemplate.exchange(uri, HttpMethod.PUT, entity, String.class);

        //returns id of updatedTag (same id)
        return res;
    }

    @DeleteMapping("/tags/{id}")
    public ResponseEntity<String> delete(@PathVariable("id") String id) {

        String uri = "https://" + ASTRA_DB_ID + "-" + ASTRA_DB_REGION +
                ".apps.astra.datastax.com/api/rest/v2/namespaces/" +
                ASTRA_DB_KEYSPACE + "/collections/tag/" + id;

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
