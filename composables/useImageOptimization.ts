export const useImageOptimization = () => {
  const getOptimizedImageUrl = (imageUrl: string, width: number = 400, format: 'webp' | 'jpeg' = 'webp') => {
    // If the image is already from an image optimization service, return as is
    if (imageUrl.includes('unsplash.com') || imageUrl.includes('picsum.photos')) {
      return imageUrl
    }

    // For local images, use Nuxt's built-in image optimization
    return `/api/image-optimization?url=${encodeURIComponent(imageUrl)}&width=${width}&format=${format}`
  }

  const getResponsiveImageUrls = (imageUrl: string, sizes: number[] = [400, 800, 1200]) => {
    // If the image is already from an image optimization service, return as is
    if (imageUrl.includes('unsplash.com') || imageUrl.includes('picsum.photos')) {
      return {
        src: imageUrl,
        srcset: ''
      }
    }

    // Generate srcset for different sizes
    const srcset = sizes
      .map(size => `${getOptimizedImageUrl(imageUrl, size)} ${size}w`)
      .join(', ')

    return {
      src: getOptimizedImageUrl(imageUrl, sizes[0]),
      srcset
    }
  }

  return {
    getOptimizedImageUrl,
    getResponsiveImageUrls
  }
} 