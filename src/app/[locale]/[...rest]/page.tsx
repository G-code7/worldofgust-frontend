import { notFound } from 'next/navigation'

// Catch-all so unknown localized URLs render the localized 404 inside the layout.
export default function CatchAll() {
  notFound()
}
