import {PayloadAction, createSlice} from "@reduxjs/toolkit";

export interface Recipe {
    _id?: string;
    id?: string;
    subtitle: string;
    category1: string;
    category2: string;
    category3: string;
    category4: string;
    ingredients: Array<string>;
    title: string;
    content: string;
    tip: string;
    url: string;
    writerEmail?: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
}

export interface RecipesState {
    recipes: Recipe[] | null;
    recipe: Recipe | null;
    hasMoreRecipes: boolean;
    Loading: boolean;
    haveNew: boolean;
    modalOn: boolean;
    viewMode: number;
    viewMethod: number;
    page: number;
    haveWorking: number;
    haveDone: number;
}

const initialState: RecipesState = {
    recipes: [],
    recipe: {
        _id: "",
        id: "",
        subtitle: "",
        category1: "",
        category2: "",
        category3: "",
        category4: "",
        ingredients:[],
        title: "",
        content: "",
        tip: "",
        url: "",
        writerEmail: "",
        createdAt: "",
        updatedAt: "",
        __v: 1,
    },
    hasMoreRecipes: true,
    Loading: false,
    haveNew: true,
    modalOn: false,
    viewMode: 1,
    viewMethod: 1,
    page: 1,
    haveWorking: 0,
    haveDone: 0,
};

const recipeSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {
        LOAD_RECIPES: (state: RecipesState, action: PayloadAction<Recipe[]>) => {
            state.recipes = action.payload;
        },
        ADD_RECIPE: (state: RecipesState, action: PayloadAction<Recipe>) => {
            state.recipes?.push(action.payload);
        },
        UPDATE_RECIPE: (state: RecipesState, action: PayloadAction<Recipe>) => {
            if (state.recipes) {
                const index = state.recipes.findIndex(recipe => recipe.id === action.payload.id);
                if (index !== -1) {
                    state.recipes[index] = action.payload;
                }
            }
        },
        DELETE_RECIPE: (state: RecipesState, action: PayloadAction<string>) => {
            if (state.recipes) {
                state.recipes = state.recipes.filter(recipe => recipe.id !== action.payload);
            }
        }
    },
});

export const {
    LOAD_RECIPES,
    ADD_RECIPE,
    UPDATE_RECIPE,
    DELETE_RECIPE
} = recipeSlice.actions;

export default recipeSlice.reducer;
