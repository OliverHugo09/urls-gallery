import CardItem from "./Card"

interface CardListProps {
  cards: CardData[]
}

interface CardData {
  id: string
  title: string
  description: string
  url: string
  image_url?: string | null
  views_count: number
  created_at: string
}

export function CardList({ cards }: CardListProps) {
  if (cards.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <p className="text-sm">No hay cards disponibles en este momento.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {cards.map((card) => (
        <CardItem key={card.id} data={card} />
      ))}
    </div>
  )
}

export default CardList
