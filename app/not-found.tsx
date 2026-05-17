import type { Metadata } from 'next'
import { NotFoundClient } from './NotFoundClient'

export const metadata: Metadata = {
  title: '404 Not Found | Exagrowth',
  description: "This page doesn't exist. Head back to the homepage or get in touch.",
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return <NotFoundClient />
}
