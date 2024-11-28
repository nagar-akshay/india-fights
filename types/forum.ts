export interface ForumThread {
  id: string
  title: string
  excerpt: string
  content: string
  authorId: string
  votes: number
  commentCount: number
  tags: string[]
  createdAt: Date
}