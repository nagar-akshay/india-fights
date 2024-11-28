// components/forum/forum-thread-list.tsx
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpIcon, ArrowDownIcon, MessageCircleIcon } from "lucide-react"

// Sample data - Move this to your data layer later
const threads = [
  {
    id: "1",
    title: "Water shortage in HSR Layout - Need community support",
    excerpt: "Our area has been facing severe water shortages. Let's discuss solutions and organize tanker services.",
    votes: 45,
    commentCount: 23,
    tags: ["water", "infrastructure", "HSR"]
  },
  {
    id: "2",
    title: "Organizing weekend cleanup drive in Koramangala",
    excerpt: "Planning a community cleanup this Saturday. Looking for volunteers and coordination support.",
    votes: 32,
    commentCount: 15,
    tags: ["cleanup", "environment", "volunteer"]
  },
  {
    id: "3",
    title: "Street light maintenance needed in Indiranagar",
    excerpt: "Multiple street lights not working near 100ft road. How can we escalate this to BBMP?",
    votes: 28,
    commentCount: 8,
    tags: ["streetlights", "safety", "BBMP"]
  }
]

export function ForumThreadList() {
  return (
    <div className="space-y-4 mt-6">
      {threads.map((thread) => (
        <Card key={thread.id} className="p-4">
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <Button variant="ghost" size="sm">
                <ArrowUpIcon className="h-4 w-4" />
              </Button>
              <span className="text-sm font-medium">{thread.votes}</span>
              <Button variant="ghost" size="sm">
                <ArrowDownIcon className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{thread.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{thread.excerpt}</p>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1">
                  <MessageCircleIcon className="h-4 w-4" />
                  <span className="text-sm">{thread.commentCount}</span>
                </div>
                <div className="flex gap-2">
                  {thread.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-full bg-gray-100 text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}