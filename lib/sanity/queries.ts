export const homepageQuery = `
  *[_type == "homepage"][0]{
    title,
    image{
      asset->{
        url
      }
    }
  }
`

export const bookBySlugQuery = `
  *[_type == "book" && slug.current == $slug][0]{
    title,
    slug,
    author,
    price,
    genre,
    pages,
    pubdate,
    description,
    tags,
    spineColor,
    coverImage{
      asset->{
        url
      }
    }
  }
`

export const allBooksQuery = `
  *[_type == "book"] | order(title asc){
    _id,
    title,
    slug,
    author,
    coverImage{
      asset->{
        url
      }
    }
  }
`