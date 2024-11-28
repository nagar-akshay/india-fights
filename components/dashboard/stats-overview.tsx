import { Card } from "@/components/ui/card"
import { AlertCircle, Clock, CheckCircle } from "lucide-react"

export function StatsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="p-6">
        <div className="flex items-center space-x-4">
          <AlertCircle className="h-8 w-8 text-yellow-500" />
          <div>
            <h3 className="text-2xl font-bold">156</h3>
            <p className="text-muted-foreground">Pending Issues</p>
          </div>
        </div>
      </Card>
      
      <Card className="p-6">
        <div className="flex items-center space-x-4">
          <Clock className="h-8 w-8 text-blue-500" />
          <div>
            <h3 className="text-2xl font-bold">83</h3>
            <p className="text-muted-foreground">In Progress</p>
          </div>
        </div>
      </Card>
      
      <Card className="p-6">
        <div className="flex items-center space-x-4">
          <CheckCircle className="h-8 w-8 text-green-500" />
          <div>
            <h3 className="text-2xl font-bold">2,547</h3>
            <p className="text-muted-foreground">Resolved</p>
          </div>
        </div>
      </Card>
    </div>
  )
}