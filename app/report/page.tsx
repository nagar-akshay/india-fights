"use client"

import { useState } from 'react'
import { useGeolocation } from '@/lib/hooks/use-geolocation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/components/ui/use-toast'
import { Camera, Upload } from 'lucide-react'
import { IssueCategory } from '@/lib/types/issue'

export default function ReportIssuePage() {
  const { latitude, longitude, loading: locationLoading } = useGeolocation()
  const { toast } = useToast()
  const [uploading, setUploading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setUploading(true)
    
    // Simulated upload delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    toast({
      title: "Issue Reported Successfully",
      description: "We'll notify you once there's an update.",
    })
    setUploading(false)
  }

  return (
    <div className="container max-w-2xl py-8">
      <h1 className="text-3xl font-bold mb-8">Report an Issue</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Issue Title</label>
          <Input placeholder="Brief description of the issue" required />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Category</label>
          <Select required>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="roads">Roads</SelectItem>
              <SelectItem value="sanitation">Sanitation</SelectItem>
              <SelectItem value="electricity">Electricity</SelectItem>
              <SelectItem value="water">Water</SelectItem>
              <SelectItem value="public_safety">Public Safety</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Detailed Description</label>
          <Textarea 
            placeholder="Provide more details about the issue"
            className="min-h-[100px]"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Upload Photos</label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-primary/5">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Camera className="w-8 h-8 mb-2 text-gray-500" />
                <p className="text-sm text-gray-500">Click or drag photos here</p>
              </div>
              <input type="file" className="hidden" accept="image/*" multiple />
            </label>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Location</label>
          <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
            {locationLoading ? (
              <p>Detecting location...</p>
            ) : (
              <p>Location detected: {latitude}, {longitude}</p>
            )}
          </div>
        </div>

        <Button type="submit" className="w-full" disabled={uploading}>
          {uploading ? (
            <>
              <Upload className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit Report'
          )}
        </Button>
      </form>
    </div>
  )
}