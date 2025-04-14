import sgMail from '@sendgrid/mail';

// Check if SendGrid API key is available
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const hasSendgridKey = !!SENDGRID_API_KEY;

if (hasSendgridKey) {
  sgMail.setApiKey(SENDGRID_API_KEY as string);
}

interface EmailData {
  fullName: string;
  email: string;
  phone: string;
  investmentType: string;
  propertyAddress?: string | null;
  loanAmount?: string | null;
  message?: string | null;
}

export async function sendLeadNotificationEmail(leadData: EmailData): Promise<boolean> {
  if (!hasSendgridKey) {
    console.warn('SendGrid API key not found. Skipping email sending.');
    return false;
  }

  try {
    const msg = {
      to: 'aattoh@realinvestfunding.com',
      from: 'notifications@realinvestfunding.com', // Use a verified sender in SendGrid
      subject: `New Lead: ${leadData.fullName} - ${leadData.investmentType}`,
      text: createPlainTextEmail(leadData),
      html: createHtmlEmail(leadData),
    };

    await sgMail.send(msg);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

function createPlainTextEmail(data: EmailData): string {
  return `
New Lead from Real Invest Funding LLC Website

Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Investment Type: ${data.investmentType}
${data.propertyAddress ? `Property Address: ${data.propertyAddress}` : ''}
${data.loanAmount ? `Loan Amount: ${data.loanAmount}` : ''}
${data.message ? `Message: ${data.message}` : ''}

This lead was submitted through the website on ${new Date().toLocaleString()}.
`;
}

function createHtmlEmail(data: EmailData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #0047ab; color: white; padding: 15px; text-align: center; }
    .content { padding: 20px; border: 1px solid #ddd; }
    .lead-info { margin-bottom: 20px; }
    .lead-info p { margin: 5px 0; }
    .footer { font-size: 12px; text-align: center; margin-top: 20px; color: #888; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Lead Notification</h2>
    </div>
    <div class="content">
      <p>A new lead has been submitted through the Real Invest Funding LLC website.</p>
      
      <div class="lead-info">
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Investment Type:</strong> ${data.investmentType}</p>
        ${data.propertyAddress ? `<p><strong>Property Address:</strong> ${data.propertyAddress}</p>` : ''}
        ${data.loanAmount ? `<p><strong>Loan Amount:</strong> ${data.loanAmount}</p>` : ''}
        ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ''}
      </div>
      
      <p>Submitted on: ${new Date().toLocaleString()}</p>
    </div>
    <div class="footer">
      <p>This is an automated message from your Real Invest Funding LLC website.</p>
    </div>
  </div>
</body>
</html>
`;
}