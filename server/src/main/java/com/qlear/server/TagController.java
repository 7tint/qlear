package com.qlear.server;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/tags")
    public String all() {
        // Create uri with env variables.
        String uri = "https://" + ASTRA_DB_ID + "-" + ASTRA_DB_REGION +
                ".apps.astra.datastax.com/api/rest/v2/namespaces/" +
                ASTRA_DB_KEYSPACE + "/collections/tags?page-size=20";

        return uri;
    }

}
