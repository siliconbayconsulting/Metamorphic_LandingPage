import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend('re_bG1tMRjQ_GHULKZJKx422sUM5P5Yjsxaf');

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await resend.emails.send({
    from: 'Acme <ahmed@tahermedicalconsultancy.com>',
    to: ['ahmed.sowdagar@gmail.com'],
    subject: 'Hello world',
    react: EmailTemplate({ firstName: 'John' }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};