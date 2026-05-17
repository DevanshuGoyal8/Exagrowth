export interface SanityImage {
  _type: 'image'
  asset: {
    _type: 'reference'
    _ref: string
  }
  alt?: string
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

export interface SanitySlug {
  _type: 'slug'
  current: string
}

export interface SanityBlock {
  _type: 'block'
  _key: string
  style: string
  children: Array<{
    _type: 'span'
    _key: string
    text: string
    marks: string[]
  }>
  markDefs: Array<{
    _type: string
    _key: string
    href?: string
    blank?: boolean
  }>
}

export interface BlogPostSeo {
  metaTitle?: string
  metaDescription?: string
}

export interface BlogPost {
  _id: string
  _type: 'blogPost'
  _createdAt: string
  _updatedAt: string
  title: string
  slug: SanitySlug
  excerpt?: string
  mainImage?: SanityImage
  body?: SanityBlock[]
  author?: string
  publishedAt?: string
  tags?: string[]
  seo?: BlogPostSeo
}

export interface PortfolioItem {
  _id: string
  _type: 'portfolio'
  _createdAt: string
  _updatedAt: string
  title: string
  slug: SanitySlug
  client?: string
  country?: string
  countryCode?: string
  industry?: string
  url?: string
  description?: string
  techStack?: string[]
  featuredImage?: SanityImage
  order?: number
}

export interface Service {
  _id: string
  _type: 'service'
  _createdAt: string
  _updatedAt: string
  title: string
  slug: SanitySlug
  icon?: string
  shortDescription?: string
  body?: SanityBlock[]
  order?: number
  featured?: boolean
}

export interface PricingPlan {
  _key: string
  plan: string
  price?: number
  currency?: string
  features?: string[]
}

export type ProductStatus = 'launched' | 'coming-soon'

export interface Product {
  _id: string
  _type: 'product'
  _createdAt: string
  _updatedAt: string
  name: string
  slug: SanitySlug
  tagline?: string
  description?: string
  status: ProductStatus
  url?: string
  features?: string[]
  pricing?: PricingPlan[]
  image?: SanityImage
}

export interface Testimonial {
  _id: string
  _type: 'testimonial'
  _createdAt: string
  _updatedAt: string
  quote: string
  author?: string
  role?: string
  company?: string
  companyUrl?: string
  avatar?: SanityImage
  order?: number
}
