import LegalLayout from '@/components/legal/LegalLayout'

const sections = [
  {
    title: 'Acceptance of Terms',
    content: 'By accessing or using any OptiFlow Solutions product or service ("Service"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our Services. These terms apply to all users, including visitors, customers, and contributors.',
  },
  {
    title: 'Description of Services',
    content: [
      'OptiFlow Solutions provides cloud-based SaaS products including but not limited to EasyPOS, EasyHRM, EasyManager, EasyLedger, EasyClinic, and EasyAnaly AI.',
      'Services are provided on a subscription basis and may be updated, modified, or discontinued at any time with reasonable notice.',
      'Access to certain features may require a paid subscription plan.',
      'We reserve the right to introduce new services or modify existing ones.',
    ],
  },
  {
    title: 'User Accounts',
    content: [
      'You must create an account to access most of our Services. You are responsible for maintaining the confidentiality of your credentials.',
      'You must provide accurate, complete, and current information during registration.',
      'You are responsible for all activity that occurs under your account.',
      'You must notify us immediately of any unauthorized use of your account.',
      'We reserve the right to suspend or terminate accounts that violate these terms.',
    ],
  },
  {
    title: 'Subscription and Billing',
    content: [
      'Subscription fees are billed in advance on a monthly or annual basis depending on your selected plan.',
      'All fees are non-refundable except as outlined in our Refund Policy.',
      'We may change subscription pricing with 30 days advance notice.',
      'Failure to pay may result in suspension or termination of your account.',
      'Taxes may apply depending on your location and are your sole responsibility.',
    ],
  },
  {
    title: 'Acceptable Use',
    content: [
      'You agree not to use the Services for any unlawful purpose or in violation of any applicable regulations.',
      'You must not attempt to gain unauthorized access to any part of the Services or related systems.',
      'You must not use the Services to transmit harmful, offensive, or spam content.',
      'Reverse engineering, decompiling, or disassembling any part of the Services is strictly prohibited.',
      'You must not resell, sublicense, or redistribute access to the Services without written consent.',
    ],
  },
  {
    title: 'Intellectual Property',
    content: 'All content, features, and functionality of the Services — including software, text, graphics, logos, and designs — are the exclusive property of OptiFlow Solutions and are protected by applicable intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the Services solely for your internal business purposes.',
  },
  {
    title: 'Data and Privacy',
    content: 'Your use of the Services is subject to our Privacy Policy, which is incorporated into these Terms by reference. By using the Services, you consent to the collection and use of your data as described in the Privacy Policy.',
  },
  {
    title: 'Limitation of Liability',
    content: 'To the maximum extent permitted by law, OptiFlow Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Services. Our total liability for any claim shall not exceed the amount paid by you in the 12 months preceding the claim.',
  },
  {
    title: 'Disclaimer of Warranties',
    content: 'The Services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the Services will be uninterrupted, error-free, or free of harmful components.',
  },
  {
    title: 'Termination',
    content: 'We may terminate or suspend your access to the Services at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties. Upon termination, your right to use the Services ceases immediately.',
  },
  {
    title: 'Governing Law',
    content: 'These Terms shall be governed by and construed in accordance with the laws of the State of Florida, United States, without regard to its conflict of law provisions. Any disputes shall be resolved exclusively in the courts of Pinellas County, Florida.',
  },
  {
    title: 'Changes to Terms',
    content: 'We reserve the right to modify these Terms at any time. We will notify users of material changes via email or in-app notification at least 14 days before the changes take effect. Continued use of the Services after changes constitutes acceptance of the new Terms.',
  },
  {
    title: 'Contact',
    content: 'For questions regarding these Terms, please contact us at hello@optiflow.dev or OptiFlow Solutions, 7901 4th St N, Ste 300, St. Petersburg, FL 33702, USA.',
  },
]

export default function TermsPage() {
  return (
    <LegalLayout
      badge="Legal · OptiFlow Solutions"
      title="Terms & Conditions"
      subtitle="Please read these terms carefully before using any OptiFlow Solutions product or service. These terms govern your use of our platform and constitute a legally binding agreement."
      effectiveDate="January 1, 2025"
      sections={sections}
    />
  )
}