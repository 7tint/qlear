package com.qlear.server;
import java.util.*;

public class Consumer {
    private String name;
    private Set<String> tags;
    private Set<String> wishlist;
    public Consumer() {};
    public Consumer(String name, Set<String> tags, Set<String> wishlist) {
        this.name = name;
        this.tags = tags;
        this.wishlist = wishlist;
    }

    public String getName() {
        return this.name;
    }
    public Set<String> getTags() {
        return this.tags;
    }
    public Set<String> getWishlist() {
        return this.wishlist;
    }

}