import sharp from 'sharp'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const imageUrl = query.url as string
  const width = parseInt(query.width as string) || 400
  const format = query.format as string || 'webp'

  if (!imageUrl) {
    throw createError({
      statusCode: 400,
      message: 'Image URL is required'
    })
  }

  try {
    // Fetch the image
    const response = await fetch(imageUrl)
    const arrayBuffer = await response.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Optimize the image
    let optimizedImage = sharp(buffer)
      .resize(width, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })

    // Convert to WebP if requested
    if (format === 'webp') {
      optimizedImage = optimizedImage.webp({
        quality: 80,
        effort: 4
      })
    } else {
      optimizedImage = optimizedImage.jpeg({
        quality: 80,
        progressive: true
      })
    }

    const processedImage = await optimizedImage.toBuffer()

    // Set response headers
    setResponseHeaders(event, {
      'Content-Type': `image/${format}`,
      'Cache-Control': 'public, max-age=31536000'
    })

    return processedImage
  } catch (error) {
    console.error('Image optimization error:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to optimize image'
    })
  }
}) 