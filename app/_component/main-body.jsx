import { AddIngredient } from "./add-ingredient"
import { SearchButton } from "./search-button"

export const MainBody = () => {
    return (
        <div className=" h-full w-full flex flex-col justify-center items-center">
            <AddIngredient />
            <SearchButton />
        </div>
    )
}
