import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  timeFrame: z.string().min(1, 'Please select a time frame'),
  size: z.string().min(1, 'Please select a size'),
  quantity: z.string().min(1, 'Please select a quantity'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
});

export const newsletterFormSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type NewsletterFormData = z.infer<typeof newsletterFormSchema>; 