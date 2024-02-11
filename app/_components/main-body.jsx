import { Button } from "@/components/ui/button"
import SearchRecipes from "./search-recipe"
import Link from "next/link"

export const MainBody = () => {
    return (
        <div className="h-full flex items-center justify-center">
            <SearchRecipes />
            <Button>
                <Link href="/ai">
                    Use AI
                </Link>
            </Button>
        </div>
    )
}
