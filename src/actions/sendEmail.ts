'use server';

export async function sendEmail() {
    try {
        // const res = await resend.emails.send({
        //     from: values.email,
        //     to: '',
        //     subject: values.subject,
        //     html: values.message,
        // });
        // return res;
    } catch (error) {
        console.error(error);
        return { error: 'Failed to send email' };
    }
}
