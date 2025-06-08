import { posts } from '../../db/posts'

export default defineEventHandler(async (event) => {
  const slug = event.context.params?.slug

  if (!slug) {
    throw createError({
      statusCode: 400,
      message: 'Slug is required'
    })
  }

  const post = posts.find(p => p.slug === slug)

  if (!post) {
    throw createError({
      statusCode: 404,
      message: 'Post not found'
    })
  }

  return post
}) 