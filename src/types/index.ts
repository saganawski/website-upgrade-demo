export interface Service {
  name: string;
  description: string;
}

export interface Therapist {
  name: string;
  title: string;
  bio: string;
  specialties: string[];
  imageUrl?: string;
}

export interface BusinessHours {
  [day: string]: string;
}

export interface Testimonial {
  name: string;
  title?: string;
  text: string;
}