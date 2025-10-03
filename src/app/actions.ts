'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

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

// This is the Google Apps Script URL from your example.
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby0cd3e_7Q6I_HuSKpDXcNjrOX3K3fmNeTAYspZP1uEnRP1hKhBsJTz7_O7E4_0XR8/exec';

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Please correct the errors below.',
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  try {
    // Send form data to Google Apps Script
    // We use 'no-cors' mode as required by Google Apps Script web apps.
    // This means we won't get a response back, but if the fetch doesn't throw an error,
    // we can assume the data was sent successfully.
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validatedFields.data),
      mode: 'no-cors' 
    });

    return {
      message: 'Thank you for your message! I will get back to you soon.',
      success: true,
    };

  } catch (error) {
    console.error('Form submission error:', error);
    return {
      message: 'Sorry, there was an error sending your message. Please try again or email me directly.',
      success: false,
    };
  }
}
