import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const blogPosts = await prisma.blogPost.findMany({
      where: { isPublished: true },
      orderBy: { publishedAt: 'desc' },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        imageUrl: true,
        authorName: true,
        authorImage: true,
        tags: true,
        publishedAt: true,
        createdAt: true,
        updatedAt: true
      }
    })

    // If no blog posts in database, seed with default ones
    if (blogPosts.length === 0) {
      const defaultPosts = [
        {
          title: "The Future of Agentic AI: Autonomous Systems That Think and Act",
          slug: "future-of-agentic-ai",
          excerpt: "Explore how agentic AI is revolutionizing business operations by creating autonomous systems that can think, learn, and make decisions independently.",
          content: "Agentic AI represents the next frontier in artificial intelligence...",
          imageUrl: "/api/placeholder/600/400",
          authorName: "Dr. Ahmed Al-Rashid",
          authorImage: "/team/ahmed-placeholder.jpg",
          tags: ["AI Technology", "Innovation", "Future Tech"],
          isPublished: true,
          publishedAt: new Date('2024-06-15')
        },
        {
          title: "Implementing AI Transformation in MENA: A Strategic Guide",
          slug: "ai-transformation-mena-guide",
          excerpt: "A comprehensive guide to successfully implementing AI transformation initiatives in Middle Eastern and North African markets.",
          content: "The Middle East and North Africa region is experiencing unprecedented digital transformation...",
          imageUrl: "/api/placeholder/600/400",
          authorName: "Sarah Al-Mansouri",
          authorImage: "/team/sarah-placeholder.jpg",
          tags: ["Strategy", "MENA", "Digital Transformation"],
          isPublished: true,
          publishedAt: new Date('2024-06-10')
        },
        {
          title: "Custom AI Development: Building Solutions That Scale",
          slug: "custom-ai-development-guide",
          excerpt: "Learn the best practices for developing custom AI solutions that can grow with your business and adapt to changing requirements.",
          content: "Building scalable AI solutions requires careful planning and architecture...",
          imageUrl: "/api/placeholder/600/400",
          authorName: "Mohammad Hassan",
          authorImage: "/team/mohammad-placeholder.jpg",
          tags: ["Development", "Scalability", "Best Practices"],
          isPublished: true,
          publishedAt: new Date('2024-06-05')
        }
      ]

      // Seed the database
      for (const post of defaultPosts) {
        await prisma.blogPost.create({ data: post })
      }

      // Fetch the seeded posts
      const seededPosts = await prisma.blogPost.findMany({
        where: { isPublished: true },
        orderBy: { publishedAt: 'desc' },
        select: {
          id: true,
          title: true,
          slug: true,
          excerpt: true,
          imageUrl: true,
          authorName: true,
          authorImage: true,
          tags: true,
          publishedAt: true,
          createdAt: true,
          updatedAt: true
        }
      })

      return NextResponse.json(seededPosts)
    }

    return NextResponse.json(blogPosts)
  } catch (error) {
    console.error('Blog API error:', error)
    // Fallback to static data if database fails
    return NextResponse.json([
      {
        id: "1",
        title: "The Future of Agentic AI: Autonomous Systems That Think and Act",
        slug: "future-of-agentic-ai",
        excerpt: "Explore how agentic AI is revolutionizing business operations by creating autonomous systems that can think, learn, and make decisions independently.",
        authorName: "Dr. Ahmed Al-Rashid",
        publishedAt: new Date('2024-06-15'),
        tags: ["AI Technology"]
      }
    ])
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { 
      title,
      slug,
      excerpt,
      content,
      imageUrl,
      authorName,
      authorImage,
      tags,
      isPublished = false
    } = body

    // Basic validation
    if (!title || !slug || !excerpt || !content || !authorName) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      )
    }

    // TODO: Add authentication check for admin users
    
    const blogPost = await prisma.blogPost.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        imageUrl,
        authorName,
        authorImage,
        tags,
        isPublished,
        publishedAt: isPublished ? new Date() : null
      }
    })

    console.log('New blog post created:', {
      id: blogPost.id,
      title: blogPost.title,
      authorName: blogPost.authorName,
      isPublished: blogPost.isPublished,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json(blogPost, { status: 201 })
  } catch (error) {
    console.error('Blog post creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    )
  }
}
