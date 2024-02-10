import { AddIngredient } from "./add-ingredient"
import { SearchButton } from "./search-button"

export const MainBody = () => {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center">
            <AddIngredient />
            <SearchButton />
        </div>
    )
}
