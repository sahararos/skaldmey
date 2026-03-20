export const homepageQuery = `
  *[_type == "homepage"][0]{
    title,
    image{
      asset->{
        url
      }
    }
  }
`;

export const bookBySlugQuery = `
  *[_type == "book" && slug.current == $slug][0]{
    title,
    slug,
    author,
    price,
    genre,
    pages,
    pubdate,
    shortDescription,
    fullDescription,
    tags,
    spineColor,
    coverImage{
      asset->{
        url
      }
    }
  }
`;

export const allBooksQuery = `
  *[_type == "book"] | order(pubdate asc){
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
`;

export const booksByAuthorQuery = `
  *[_type == "book" && author == $author && slug.current != $slug] | order(pubdate desc){
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
`;

export const booksByGenreQuery = `
  *[_type == "book" && genre == $genre && slug.current != $slug] | order(pubdate desc){
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
`;

export const searchBooksQuery = `
  *[
    _type == "book" &&
    (
      title match $search + "*" ||
      author match $search + "*"
    )
  ][0...5]{
    _id,
    title,
    author,
    slug
  }
`;
