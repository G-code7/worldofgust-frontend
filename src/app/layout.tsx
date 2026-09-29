import type { ReactNode } from 'react'

// The real root layout (with <html lang>) lives in app/[locale]/layout.tsx.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children
}
