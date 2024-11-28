import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ForumThreadList } from "./forum-thread-list"
import { ForumCreateThread } from "./forum-create-thread"
import {LocalEvents} from "./local-events"
export function ForumLayout() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Community Forum</h1>
      <Tabs defaultValue="discussions">
        <TabsList>
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="events">Local Events</TabsTrigger>
        </TabsList>
        <TabsContent value="discussions">
          <Card className="p-4">
            <ForumCreateThread />
            <ForumThreadList />
          </Card>
        </TabsContent>
        <TabsContent value="events">
          <Card className="p-4">
            <LocalEvents />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
