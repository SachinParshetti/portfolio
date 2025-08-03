'use server';

import { Resend } from 'resend';
import { SendMessageInputSchema } from '@/schemas/send-message-schema'; 
import type { SendMessageInput } from '@/schemas/send-message-schema';
import { z } from 'zod';

const SendMessageOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});

export type SendMessageOutput = z.infer<typeof SendMessageOutputSchema>;

export async function sendMessage(input: SendMessageInput): Promise<SendMessageOutput> {
  const parsed = SendMessageInputSchema.safeParse(input);
  if (!parsed.success) {
    return {
      success: false,
      message: 'Invalid input',
    };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const toEmail = process.env.TO_EMAIL_ADDRESS;

  if (!toEmail) {
    return {
      success: false,
      message: 'Server error: TO_EMAIL_ADDRESS not set',
    };
  }

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: toEmail,
      reply_to: input.email,
      subject: `New message from ${input.name}: ${input.subject}`,
      html: `
        <p><strong>Name:</strong> ${input.name}</p>
        <p><strong>Email:</strong> ${input.email}</p>
        <p><strong>Subject:</strong> ${input.subject}</p>
        <p><strong>Message:</strong><br/>${input.message}</p>
      `,
    });

    return {
      success: true,
      message: 'Your message has been sent!',
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: 'Failed to send your message. Please try again later.',
    };
  }
}
