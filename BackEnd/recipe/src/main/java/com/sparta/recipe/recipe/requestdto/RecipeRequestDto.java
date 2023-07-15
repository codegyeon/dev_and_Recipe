package com.sparta.recipe.recipe.requestdto;

import lombok.Getter;

@Getter
public class RecipeRequestDto {
    private String foodName;
    private String ingredient;
    private String linkImage;
    private String cookingMethod;
}
