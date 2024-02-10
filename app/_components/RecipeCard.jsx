const RecipeCard = ({ recipe, recipeIndex }) => {
  return (
    <div>
      <span className=" font-extrabold text-maroon">{recipe.name}:</span> <span>{recipe.description}</span>
      <ol>
      Steps:
        {recipe.instructions.map((instruction, instructionIndex) => (
          <li key={instructionIndex}>{instruction.display_text}</li>
        ))}
        ;
      </ol>
    </div>
  );
};

export default RecipeCard;
