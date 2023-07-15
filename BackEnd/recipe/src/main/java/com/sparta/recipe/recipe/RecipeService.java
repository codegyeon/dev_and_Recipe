package com.sparta.recipe.recipe;

import com.sparta.recipe.recipe.requestdto.RecipeRequestDto;
import com.sparta.recipe.recipe.responsedto.RecipeResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RecipeService {

    private final RecipeRepository recipeRepository;

    public List<RecipeResponseDto> getRecipeList() {
        return recipeRepository.findAll().stream().map(RecipeResponseDto::new).toList();
    }

    public RecipeResponseDto createRecipe(RecipeRequestDto recipeRequestDto) {
        Recipe recipe = recipeRepository.save(new Recipe(recipeRequestDto));
        return new RecipeResponseDto(recipe);
    }
}
