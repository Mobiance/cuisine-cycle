import { Loader } from "lucide-react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const spinnerVariants = cva(
    "text-muted-foreground animate-spin",
    {
        variants: {
            size: {
                default: "h-6 w-6",
                sm: "h-2 w-2",
                lg: "h-6 w-6",
                icon: "h-10 w-10"
            }
        },
        defaultVariants: {
            size: "default"
        },
    },
);

export const Spinner = () => {
    return(
        <Loader className={cn(spinnerVariants())} />
    )
}