import { EmailTemplate } from '../../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend('re_bG1tMRjQ_GHULKZJKx422sUM5P5Yjsxaf');

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <ahmed@tahermedicalconsultancy.com>',
      to: ['ahmed.sowdagar@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}