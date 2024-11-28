import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function WhistleblowerPortal() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Whistleblower Portal</h1>
      <Alert className="mb-6">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Secure & Anonymous</AlertTitle>
        <AlertDescription>
          Your report is encrypted and anonymous. No IP addresses or personal
          information is stored.
        </AlertDescription>
      </Alert>
      <Card className="p-6">
        <form className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Report Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Department/Area
                </label>
                <Input placeholder="Which department or area is involved?" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Description
                </label>
                <Textarea
                  placeholder="Provide details about the corruption incident..."
                  rows={6}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Evidence (Optional)
                </label>
                <Input type="file" multiple />
                <p className="text-xs text-gray-500 mt-1">
                  Files are automatically stripped of metadata before upload
                </p>
              </div>
            </div>
          </div>
          <Button type="submit" className="w-full">
            Submit Anonymous Report
          </Button>
        </form>
      </Card>
    </div>
  )
}
