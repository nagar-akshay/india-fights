"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IssuesList } from "@/components/dashboard/issues-list"
import { StatsOverview } from "@/components/dashboard/stats-overview"
import { IssuesMap } from "@/components/dashboard/issues-map"

export default function DashboardPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Civic Issues Dashboard</h1>
      
      <div className="grid gap-6">
        <StatsOverview />
        
        <Tabs defaultValue="list" className="space-y-4">
          <TabsList>
            <TabsTrigger value="list">List View</TabsTrigger>
            <TabsTrigger value="map">Map View</TabsTrigger>
          </TabsList>
          
          <TabsContent value="list" className="space-y-4">
            <IssuesList />
          </TabsContent>
          
          <TabsContent value="map">
            <Card className="p-6">
              <IssuesMap />
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}