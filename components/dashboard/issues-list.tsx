"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { formatDistanceToNow } from 'date-fns'

const MOCK_ISSUES = [
  {
    id: '1',
    title: 'Large pothole on MG Road',
    category: 'roads',
    status: 'pending',
    createdAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    title: 'Street light not working',
    category: 'electricity',
    status: 'in_progress',
    createdAt: '2024-01-14T15:30:00Z',
  },
]

export function IssuesList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Issue</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Reported</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {MOCK_ISSUES.map((issue) => (
          <TableRow key={issue.id}>
            <TableCell className="font-medium">{issue.title}</TableCell>
            <TableCell>{issue.category}</TableCell>
            <TableCell>
              <Badge variant={issue.status === 'pending' ? 'destructive' : 'default'}>
                {issue.status}
              </Badge>
            </TableCell>
            <TableCell>
              {formatDistanceToNow(new Date(issue.createdAt), { addSuffix: true })}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}