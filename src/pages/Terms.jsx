import LegalPage from '../components/LegalPage'

const P = ({ children }) => <p>{children}</p>

const sections = [
  { id: 'introduction', icon: 'FileText', title: 'Introduction',
    body: <P>These Terms &amp; Conditions (“Terms”) govern your use of the Cleanly website, mobile application, and laundry &amp; dry cleaning services (collectively, “Services”) operated by Cleanly (“we”, “us”, or “our”). By accessing our website, booking a pickup, or using our Services, you agree to be bound by these Terms.</P> },
  { id: 'use', icon: 'UserCheck', title: 'Use of Our Services',
    body: <P>Our Services are intended for personal, non-commercial use. You agree to provide accurate information for bookings, including your name, address, and contact details. You must be at least 18 years old to use our Services.</P> },
  { id: 'account', icon: 'CalendarCheck', title: 'Account & Bookings',
    body: <P>You may book our Services through our website, app, or customer support. You are responsible for maintaining the confidentiality of your account information and for all activities under your account. We reserve the right to refuse or cancel any booking at our discretion.</P> },
  { id: 'service-details', icon: 'Settings', title: 'Service Details',
    body: <P>We provide laundry, dry cleaning, ironing, and related services as described on our website. Turnaround time, cleaning methods, and results may vary based on fabric type, condition, and service selected. We make reasonable efforts to handle your garments with care.</P> },
  { id: 'pricing', icon: 'Wallet', title: 'Pricing & Payments',
    body: <P>All prices are listed in Indian Rupees (INR) and are subject to change without prior notice. Payment can be made via the available options on our website or app (UPI, cards, wallets, cash on delivery where applicable). We reserve the right to update pricing or offers at any time.</P> },
  { id: 'pickup', icon: 'Truck', title: 'Pickup & Delivery',
    body: <P>Our team will pickup and deliver at the scheduled time slots. While we strive to meet the estimated time, delays may occur due to unforeseen circumstances such as weather, traffic, or operational issues. You will be notified in case of any significant delay.</P> },
  { id: 'prohibited', icon: 'Ban', title: 'Prohibited Items',
    body: <P>Please do not send items that are flammable, hazardous, illegal, or unsuitable for cleaning, including but not limited to chemicals, explosives, sharp objects, or items containing cash, jewelry, or other valuables. We are not responsible for any prohibited items sent with your laundry.</P> },
  { id: 'liability', icon: 'ShieldAlert', title: 'Liability & Loss',
    body: <P>We take utmost care in handling your garments. However, we are not liable for normal wear and tear, color fading, shrinkage, or damage caused due to pre-existing conditions. Our liability for any loss or damage is limited to the value of the service charged for the affected item.</P> },
  { id: 'cancellations', icon: 'XCircle', title: 'Cancellations & Refunds',
    body: <P>You may cancel a booking before the pickup is assigned. Once the pickup is completed, cancellations are not allowed. Refunds, if applicable, will be processed as per our refund policy.</P> },
  { id: 'ip', icon: 'Copyright', title: 'Intellectual Property',
    body: <P>All content on our website, including text, graphics, logos, and images, is the property of Cleanly and is protected by applicable copyright and intellectual property laws. You may not use our content without prior written permission.</P> },
  { id: 'changes', icon: 'RefreshCw', title: 'Changes to Terms',
    body: <P>We may update these Terms from time to time. Any changes will be posted on this page with the updated date. Your continued use of our Services after changes are made constitutes your acceptance of the revised Terms.</P> },
  { id: 'law', icon: 'Scale', title: 'Governing Law',
    body: <P>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Gurgaon, Haryana.</P> },
  { id: 'contact', icon: 'Mail', title: 'Contact Us',
    body: <P>If you have any questions about these Terms &amp; Conditions, please contact us at support@cleanly.in, +91 98765 43210, or Sector 45, Gurgaon, Haryana 122003.</P> },
]

export default function Terms() {
  return (
    <LegalPage
      crumb="Terms & Conditions"
      title="Terms &"
      highlight="Conditions"
      intro="Please read our Terms & Conditions carefully before using our services. By booking a pickup or using our website, you agree to be bound by these terms."
      sections={sections}
    />
  )
}
