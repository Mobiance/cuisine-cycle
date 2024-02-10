import {
    Card,
    CardContent,
    CardTitle,
    CardHeader,
    CardDescription
} from "@/components/ui/card"

export const CardRecipe = ({ recipe, recipeIndex }) => {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>{recipe.name}</CardTitle>
                </CardHeader>
                <CardDescription className="px-5 py-3 text-md font-semibold">
                    Description:
                    {recipe.description}
                </CardDescription>
                <CardContent>
                    Steps:
                    {recipe.instructions.map((instruction, instructionIndex) => (
                        <li key={instructionIndex}>-{instruction.display_text}</li>
                    ))}
                </CardContent>
            </Card>
        </div>
    )
}
