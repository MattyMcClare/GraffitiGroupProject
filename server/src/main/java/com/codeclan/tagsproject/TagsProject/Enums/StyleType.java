package com.codeclan.tagsproject.TagsProject.Enums;


public enum StyleType{

    TAG ("tag"),
    THROWUP ("throwup"),
    BLOCKBUSTER ("blockbuster"),
    WILDSTYLE ("wildstyle"),
    HEAVEN ("heaven"),
    STENCIL ("stencil"),
    PASTEUP ("pasteup"),
    SLAP ("slap"),
    PIECE ("piece");

    private final String style;

    StyleType(String style) {
        this.style = style;
    }

    public String getStyle() {
        return style;
    }
}
