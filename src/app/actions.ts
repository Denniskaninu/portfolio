'use server';

// This file is no longer used for the contact form submission,
// but can be kept for other future server actions.
// The form logic has been moved to ContactSection.tsx for client-side handling.

export type FormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
  success: boolean;
};
