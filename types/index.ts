export interface Author {
  name: string;
  avatar: string;
}

export interface Post {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readingTime: number;
  author: Author;
  tags: string[];
} 