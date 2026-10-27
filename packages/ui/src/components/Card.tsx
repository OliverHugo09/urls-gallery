import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@workspace/ui/lib/utils"

const cardVariants = cva(
  "rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md",
  {
    variants: {
      variant: {
        default: "bg-white dark:bg-gray-800",
        outline: "border-2 border-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const cardHeaderVariants = cva(
  "flex flex-col space-y-1.5 p-4",
  {
    variants: {
      variant: {
        default: "",
        outline: "",
      },
    },
  }
)

const cardTitleVariants = cva(
  "text-lg font-semibold leading-none tracking-tight",
  {
    variants: {},
  }
)

const cardDescriptionVariants = cva(
  "text-sm text-muted-foreground",
  {
    variants: {},
  }
)

const cardContentVariants = cva(
  "p-4 space-y-2",
  {
    variants: {},
  }
)

const cardFooterVariants = cva(
  "flex justify-end p-4 pt-0",
  {
    variants: {},
  }
)

function Card({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof cardVariants>) {
  return (
    <div
      className={cn(cardVariants({ variant, className }))}
      {...props}
    />
  )
}

function CardHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 p-4", className)}
      {...props}
    />
  )
}

function CardTitle({
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn(cardTitleVariants({ className }))}
      {...props}
    />
  )
}

function CardDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(cardDescriptionVariants({ className }))}
      {...props}
    />
  )
}

function CardContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("p-4 space-y-2", className)}
      {...props}
    />
  )
}

function CardFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex justify-end p-4 pt-0", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
}
