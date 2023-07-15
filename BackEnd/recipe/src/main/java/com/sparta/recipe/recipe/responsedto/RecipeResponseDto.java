package com.sparta.recipe.recipe.responsedto;

import com.sparta.recipe.recipe.Recipe;
import lombok.Getter;

@Getter
public class RecipeResponseDto {
    private Long id;

    private String foodName;
    private String ingredient;
    private String linkImage;
    private String cookingMethod;

    public RecipeResponseDto(Recipe recipe) {
        this.id = recipe.getId();
        this.foodName = recipe.getFoodName();
        this.ingredient = recipe.getIngredient();
        this.linkImage = recipe.getLinkImage();
        this.cookingMethod = recipe.getCookingMethod();
    }
}
