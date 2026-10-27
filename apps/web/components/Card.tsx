import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@workspace/ui/components/Card"
import { Button } from "@workspace/ui/components/Button"
import { Eye, ExternalLink } from "lucide-react"

interface CardData {
  id: string
  title: string
  description: string
  url: string
  image_url?: string | null
  views_count: number
  created_at: string
}

interface CardProps {
  data: CardData
}

export function CardItem({ data }: CardProps) {
  return (
    <div className="rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md flex flex-col overflow-hidden">
      <div className="p-4 space-y-1.5">
        <div className="flex items-center justify-between gap-4">
          <CardTitle className="text-lg font-semibold leading-none tracking-tight line-clamp-2">
            <a href={data.url} target="_blank" rel="noopener noreferrer">
              {data.title}
            </a>
          </CardTitle>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Eye className="h-4 w-4" />
            <span className="text-xs">{data.views_count}</span>
          </div>
        </div>
        {data.description && (
          <CardDescription className="line-clamp-3">
            {data.description}
          </CardDescription>
        )}
      </div>
      <div className="flex-1 p-4">
        {data.image_url && (
          <img
            src={data.image_url}
            alt={data.title}
            className="w-full h-40 object-cover rounded-md"
          />
        )}
      </div>
      <div className="flex justify-end p-4 pt-0">
        <Button
          variant="ghost"
          className="w-full"
          onClick={(e) => {
            e.preventDefault()
            window.open(data.url, '_blank', 'noopener,noreferrer')
          }}
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          Abrir enlace
        </Button>
      </div>
    </div>
  )
}

export default CardItem
