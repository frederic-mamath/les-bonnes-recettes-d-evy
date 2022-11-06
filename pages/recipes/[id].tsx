import  { useRouter } from "next/router"

import { Recipe } from 'models/Recipe'
import { GetStaticPaths, GetStaticProps } from "next";

const recipes: Record<string, Recipe> = {
    "894ea07e-e77b-4114-9767-9b772d380065": {
        id: "894ea07e-e77b-4114-9767-9b772d380065",
        name: "Oeufs de cent ans",
        krap: "dsd"
    },
    "61d80433-a26e-4964-a95b-20a7b489f5ec": {
        id: "61d80433-a26e-4964-a95b-20a7b489f5ec",
        name: "Zha Jiang Mian",
        krap: "dsd"
    }
};

export const getStaticPaths: GetStaticPaths = () => {
    const paths = Object.values(recipes).map((recipe: Recipe) => ({
        params: { id: recipe.id },
      }))

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = (context) => {
    const { params = {} } = context

    const {id: recipeId } = params

    if (!recipeId || typeof recipeId !== "string") return {
        props: { recipe: undefined }
    }

    const recipe = recipes[recipeId]

    return {
        props: { recipe }
    }
}

interface Props {
    recipe: Recipe
}

const RecipePage = (props: Props) => {
    const {} = props
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            <h1>Recipe with id {id}</h1>
            <h2>Name</h2>
        </div>
    )
}

export default RecipePage;
