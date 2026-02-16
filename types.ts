import { LucideIcon } from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface Doctor {
  name: string;
  title: string;
  description: string;
  image: string;
  phone: string;
}
