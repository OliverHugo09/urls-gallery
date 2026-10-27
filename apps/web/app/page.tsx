'use client'

import { useEffect, useState } from 'react'
import CardItem from "@/components/Card"
import LoadingState from "@/components/LoadingState"
import ErrorState from "@/components/ErrorState"
import { Pagination } from "@/components/Pagination"
import { Button } from "@workspace/ui/components/Button"
import { Grid, Eye, LayoutDashboard } from "lucide-react"

interface CardData {
  id: string
  title: string
  description: string
  url: string
  image_url?: string | null
  views_count: number
  created_at: string
}

export default function HomePage() {
  const [cards, setCards] = useState<CardData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalCards, setTotalCards] = useState(9)
  const pageSize = 10

  useEffect(() => {
    async function fetchData() {
      try {
        const supabase = createClient()
        if (!supabase) {
          setError(new Error('Supabase not configured'))
          setLoading(false)
          return
        }

        // Paginación server-side con .range()
        const from = (currentPage - 1) * pageSize
        const to = from + pageSize - 1

        const { data, error, count } = await supabase
          .from("cards")
          .select("id, title, description, url, image_url, views_count, created_at", { count: 'exact' })
          .eq("status", "published")
          .order("created_at", { ascending: false })
          .range(from, to)

        if (error) {
          throw error
        }

        setCards(data || [])
        setTotalCards(count || 0)
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [currentPage, pageSize])

  const totalPages = Math.ceil(totalCards / pageSize)

  if (loading) {
    return (
      <div className="flex min-h-svh items-center justify-center p-4">
        <LoadingState />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-svh items-center justify-center p-4">
        <div className="max-w-md text-center">
          <ErrorState message={error.message} />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="border-b bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:py-10">
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Galería de Cards
                </h1>
                <p className="text-muted-foreground mt-1 text-sm sm:text-base">
                  Explora las últimas card publicadas
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  window.open('/categorias', '_blank')
                }}
              >
                <LayoutDashboard className="h-4 w-4 mr-2" />
                Ver Categorías
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Grid className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium">{totalCards}</p>
                  <p className="text-xs">Cards totales</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Eye className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium">{cards.reduce((acc, card) => acc + card.views_count, 0)}</p>
                  <p className="text-xs">Total vistas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {cards.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5">
              {cards.map((card) => (
                <CardItem key={card.id} data={card} />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No hay cards disponibles</p>
          </div>
        )}
      </div>
    </div>
  )
}

import { createBrowserClient } from '@supabase/ssr'

function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    return null
  }

  return createBrowserClient(supabaseUrl, supabaseKey)
}
