import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, MapPin, Clock, Users } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function LocalEvents() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Upcoming Local Events</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create Event</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Community Event</DialogTitle>
            </DialogHeader>
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium">Event Name</label>
                <Input placeholder="Enter event name..." />
              </div>
              <div>
                <label className="text-sm font-medium">Date & Time</label>
                <Input type="datetime-local" />
              </div>
              <div>
                <label className="text-sm font-medium">Location</label>
                <Input placeholder="Event location..." />
              </div>
              <div>
                <label className="text-sm font-medium">Description</label>
                <Textarea placeholder="Describe the event..." />
              </div>
              <div>
                <label className="text-sm font-medium">Expected Attendees</label>
                <Input type="number" placeholder="Expected number of attendees" />
              </div>
              <Button type="submit" className="w-full">Create Event</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {events.map((event) => (
          <Card key={event.id} className="p-4">
            <h3 className="text-lg font-semibold">{event.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{event.description}</p>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4" />
                <span>{event.attendees} expected attendees</span>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <Button variant="outline" className="w-full">Join Event</Button>
              <Button variant="outline" className="w-full">Share</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

// Sample data - Replace with actual data from your backend
const events = [
  {
    id: 1,
    name: "Community Cleanup Drive",
    description: "Join us for a weekend cleanup drive to make our neighborhood cleaner and greener.",
    date: "2024-12-01",
    time: "09:00 AM",
    location: "Koramangala Park",
    attendees: 45
  },
  {
    id: 2,
    name: "Road Safety Awareness",
    description: "Workshop on road safety measures and traffic rules awareness for local residents.",
    date: "2024-12-08",
    time: "10:30 AM",
    location: "Community Hall, HSR Layout",
    attendees: 30
  }
]