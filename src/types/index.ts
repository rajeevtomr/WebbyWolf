export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  timeFrame: string;
  size: string;
  quantity: string;
  description: string;
}

export interface NewsletterFormData {
  email: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
} 
