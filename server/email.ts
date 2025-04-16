import nodemailer from 'nodemailer';

// Create a simple SMTP transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email', // For testing - will be replaced with your email service
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'ethereal.user@ethereal.email', // For testing - will be replaced with your email
    pass: 'ethereal_pass' // For testing - will be replaced with your password
  },
  tls: {
    rejectUnauthorized: false // For testing in development environments
  }
});

// Log information about the transporter
console.log('Email transporter configured:', !!transporter);

interface EmailData {
  fullName: string;
  email: string;
  phone: string;
  investmentType: string;
  propertyAddress?: string | null;
  loanAmount?: string | null;
  message?: string | null;
  service?: string; // Added for service-specific leads
}

export async function sendLeadNotificationEmail(leadData: EmailData): Promise<boolean> {
  try {
    // For development and testing, we'll console log the data
    console.log('New lead data received:', JSON.stringify(leadData, null, 2));
    
    // Send the email notification
    const info = await transporter.sendMail({
      from: '"Real Invest Funding" <notifications@realinvestfunding.com>',
      to: 'aattoh@realinvest.com',
      subject: `New Lead: ${leadData.fullName} - ${leadData.investmentType || leadData.service || 'Website Inquiry'}`,
      text: createPlainTextEmail(leadData),
      html: createHtmlEmail(leadData),
    });
    
    console.log('Message sent: %s', info.messageId);
    
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
${data.investmentType ? `Investment Type: ${data.investmentType}` : ''}
${data.service ? `Service Requested: ${data.service}` : ''}
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
        ${data.investmentType ? `<p><strong>Investment Type:</strong> ${data.investmentType}</p>` : ''}
        ${data.service ? `<p><strong>Service Requested:</strong> ${data.service}</p>` : ''}
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