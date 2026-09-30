import LegalPage from '../components/LegalPage'

const List = ({ items }) => (
  <ul className="space-y-2">
    {items.map((it) => (
      <li key={it.k} className="flex gap-2">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
        <span><strong className="text-ink">{it.k}:</strong> {it.v}</span>
      </li>
    ))}
  </ul>
)

const sections = [
  { id: 'introduction', icon: 'FileText', title: 'Introduction',
    body: <p>Cleanly (“we”, “us”, or “our”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, and laundry &amp; dry cleaning services (collectively, the “Services”).</p> },
  { id: 'collect', icon: 'Database', title: 'Information We Collect',
    body: <List items={[
      { k: 'Personal Information', v: 'name, phone number, email address, and delivery address.' },
      { k: 'Booking Information', v: 'pickup and delivery details, service preferences, and special instructions.' },
      { k: 'Payment Information', v: 'payment method and transaction details (processed securely through trusted partners).' },
      { k: 'Device & Usage Information', v: 'IP address, browser type, device information, and pages visited.' },
      { k: 'Communication', v: 'messages, feedback, and customer support interactions.' },
    ]} /> },
  { id: 'use', icon: 'Settings', title: 'How We Use Your Information',
    body: <List items={[
      { k: 'Service delivery', v: 'to provide, operate, and improve our Services.' },
      { k: 'Bookings', v: 'to process bookings, payments, and deliveries.' },
      { k: 'Communication', v: 'to update you about orders, offers, and support.' },
      { k: 'Analytics', v: 'to analyze usage and enhance user experience.' },
      { k: 'Security', v: 'to ensure security and prevention of fraud.' },
    ]} /> },
  { id: 'sharing', icon: 'Users', title: 'Information Sharing',
    body: <><p>We do not sell your personal information. We may share your information only in the following cases:</p>
      <List items={[
        { k: 'Service partners', v: 'for pickup, delivery, and payment processing.' },
        { k: 'Legal authorities', v: 'if required by law.' },
        { k: 'Analytics partners', v: 'to improve our Services.' },
        { k: 'Business transfers', v: 'in case of a merger or acquisition (with proper safeguards).' },
      ]} /></> },
  { id: 'security', icon: 'ShieldCheck', title: 'Data Security',
    body: <p>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, misuse, or disclosure. However, no method of online transmission or storage is 100% secure, and we cannot guarantee absolute security.</p> },
  { id: 'cookies', icon: 'Cookie', title: 'Cookies & Tracking Technologies',
    body: <p>Our website and app use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content. You can manage your cookie preferences through your browser settings.</p> },
  { id: 'rights', icon: 'UserCheck', title: 'Your Rights',
    body: <List items={[
      { k: 'Access', v: 'access, update, or correct your personal information.' },
      { k: 'Deletion', v: 'request deletion of your information (subject to legal requirements).' },
      { k: 'Opt-out', v: 'opt out of marketing communications.' },
      { k: 'Withdraw consent', v: 'withdraw consent where applicable.' },
    ]} /> },
  { id: 'retention', icon: 'Clock', title: 'Data Retention',
    body: <p>We retain your personal information only for as long as necessary to provide our Services, comply with legal obligations, resolve disputes, and enforce our agreements.</p> },
  { id: 'children', icon: 'Baby', title: 'Children’s Privacy',
    body: <p>Our Services are not intended for children under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with information, please contact us.</p> },
  { id: 'third-party', icon: 'Link2', title: 'Third-Party Links',
    body: <p>Our website or app may contain links to third-party websites or services. We are not responsible for their privacy practices, and we encourage you to review their privacy policies.</p> },
  { id: 'updates', icon: 'RefreshCw', title: 'Updates to This Policy',
    body: <p>We may update this Privacy Policy from time to time. The updated version will be posted on this page with the revised “Effective Date.” We encourage you to review this page periodically.</p> },
  { id: 'contact', icon: 'Mail', title: 'Contact Us',
    body: <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at support@cleanly.in, +91 98765 43210, or Sector 45, Gurgaon, Haryana 122003.</p> },
]

export default function Privacy() {
  return (
    <LegalPage
      crumb="Privacy Policy"
      title="Privacy"
      highlight="Policy"
      intro="Your privacy is important to us. This Privacy Policy explains how we collect, use, protect, and share your personal information when you use Cleanly’s website, mobile application, and services."
      sections={sections}
      aside={{ icon: 'Lock', title: 'Your Privacy, Our Priority', text: 'We are committed to keeping your information safe and providing a secure, seamless experience every time you use Cleanly.' }}
    />
  )
}
