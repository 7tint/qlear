package com.qlear.server;

public class Tag {
    private final String companyId;
    private final String name;
    private final String series;
    private final double price;
    private final String description;
    private final String[][] colourways;
    private final float[][] sizeChart;
    private final String materials;
    private final String instructions;

    public Tag(String companyId, String name, String series, double price, String description,
                String[][] colourways, float[][] sizeChart, String materials, String instructions) {
        this.companyId = companyId;
        this.name = name;
        this.series = series;
        this.price = Math.round(price * 100) / (double) 100;
        this.description = description;
        this.colourways = colourways;
        this.sizeChart = sizeChart;
        this.materials = materials;
        this.instructions = instructions;
    }
}
