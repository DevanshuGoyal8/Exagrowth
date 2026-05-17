export const BLOG_POSTS_QUERY = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    title,
    slug,
    excerpt,
    mainImage {
      _type,
      asset,
      alt,
      hotspot,
      crop
    },
    author,
    publishedAt,
    tags
  }
`

export const BLOG_POST_QUERY = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    title,
    slug,
    excerpt,
    mainImage {
      _type,
      asset,
      alt,
      hotspot,
      crop
    },
    body,
    author,
    publishedAt,
    tags,
    seo {
      metaTitle,
      metaDescription
    }
  }
`

export const PORTFOLIO_QUERY = `
  *[_type == "portfolio"] | order(order asc) {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    title,
    slug,
    client,
    country,
    countryCode,
    industry,
    url,
    description,
    techStack,
    featuredImage {
      _type,
      asset,
      alt,
      hotspot,
      crop
    },
    order
  }
`

export const SERVICES_QUERY = `
  *[_type == "service"] | order(order asc) {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    title,
    slug,
    icon,
    shortDescription,
    body,
    order,
    featured
  }
`

export const FEATURED_SERVICES_QUERY = `
  *[_type == "service" && featured == true] | order(order asc) {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    title,
    slug,
    icon,
    shortDescription,
    body,
    order,
    featured
  }
`

export const PRODUCTS_QUERY = `
  *[_type == "product"] {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    name,
    slug,
    tagline,
    description,
    status,
    url,
    features,
    pricing[] {
      _key,
      plan,
      price,
      currency,
      features
    },
    image {
      _type,
      asset,
      alt,
      hotspot,
      crop
    }
  }
`

export const TESTIMONIALS_QUERY = `
  *[_type == "testimonial"] | order(order asc) {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    quote,
    author,
    role,
    company,
    companyUrl,
    avatar {
      _type,
      asset,
      hotspot,
      crop
    },
    order
  }
`
