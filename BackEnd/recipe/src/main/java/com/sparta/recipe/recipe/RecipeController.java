package com.sparta.recipe.recipe;

import com.sparta.recipe.recipe.requestdto.RecipeRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/recipe")
@RequiredArgsConstructor
public class RecipeController {

    private final RecipeService recipeService;


//  전체 레시피 조회
    @GetMapping("")
    public ResponseEntity getRecipeList(){
        return new ResponseEntity<>(recipeService.getRecipeList(), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity createRecipe(@RequestBody RecipeRequestDto recipeRequestDto){
        recipeService.createRecipe(recipeRequestDto);
        return new ResponseEntity("success",HttpStatus.OK);
    }
}
