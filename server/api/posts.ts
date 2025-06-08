import { posts } from '../db/posts'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const category = query.category as string | undefined

  if (category && category !== 'All') {
    return posts.filter(post => post.category === category)
  }

  return posts
}) 