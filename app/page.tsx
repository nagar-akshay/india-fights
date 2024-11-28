import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AlertCircle, ArrowRight, BarChart3, Users } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Bangalore Citizens
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Report civic issues, track resolutions, and build a better community together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/report">
              <Button size="lg" className="w-full sm:w-auto">
                Report an Issue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Explore Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-center space-x-4">
                <AlertCircle className="h-10 w-10 text-primary" />
                <div>
                  <h3 className="text-2xl font-bold">2,547</h3>
                  <p className="text-muted-foreground">Issues Resolved</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center space-x-4">
                <BarChart3 className="h-10 w-10 text-primary" />
                <div>
                  <h3 className="text-2xl font-bold">89%</h3>
                  <p className="text-muted-foreground">Resolution Rate</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center space-x-4">
                <Users className="h-10 w-10 text-primary" />
                <div>
                  <h3 className="text-2xl font-bold">15,000+</h3>
                  <p className="text-muted-foreground">Active Citizens</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}