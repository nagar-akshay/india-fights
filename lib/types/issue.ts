export type IssueCategory = 
  | 'roads'
  | 'sanitation'
  | 'electricity'
  | 'water'
  | 'public_safety'
  | 'other';

export type IssueStatus = 'pending' | 'in_progress' | 'resolved';

export interface Issue {
  id: string;
  title: string;
  description: string;
  category: IssueCategory;
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  status: IssueStatus;
  images: string[];
  createdAt: string;
  updatedAt: string;
  userId: string;
}