import LegalLayout from '@/components/legal/LegalLayout'

const sections = [
  {
    title: 'Overview',
    content: 'OptiFlow Solutions strives to deliver exceptional SaaS products and services. We understand that circumstances change, and this Refund Policy outlines when and how refunds may be issued. By subscribing to any OptiFlow Solutions service, you agree to this policy.',
  },
  {
    title: '14-Day Money-Back Guarantee',
    content: [
      'All new subscriptions are eligible for a full refund within 14 days of the initial purchase date.',
      'This applies to first-time subscribers on any paid plan.',
      'The guarantee does not apply to renewals, upgrades, or add-on purchases.',
      'To request a refund under this guarantee, contact hello@optiflow.dev within 14 days of your purchase.',
      'Refunds are processed within 5–10 business days to your original payment method.',
    ],
  },
  {
    title: 'Monthly Subscriptions',
    content: [
      'Monthly subscription fees are non-refundable once the billing period has started.',
      'You may cancel your subscription at any time to prevent future charges.',
      'Upon cancellation, you will retain access to the Service until the end of the current billing period.',
      'No partial refunds are issued for unused days within a billing period.',
    ],
  },
  {
    title: 'Annual Subscriptions',
    content: [
      'Annual subscriptions cancelled within the first 14 days are eligible for a full refund.',
      'After 14 days, annual subscribers may request a pro-rated refund for the remaining unused months, subject to review.',
      'Pro-rated refunds are calculated based on the number of full calendar months remaining.',
      'A processing fee of up to 10% may apply to pro-rated annual refunds.',
      'Refund eligibility for annual plans is reviewed on a case-by-case basis.',
    ],
  },
  {
    title: 'Non-Refundable Items',
    content: [
      'Setup fees, onboarding fees, or implementation charges.',
      'Add-on features or one-time purchases after the 14-day guarantee period.',
      'Accounts suspended or terminated due to violation of our Terms & Conditions.',
      'Subscription renewals — we send renewal reminders 7 days before billing.',
      'Fees incurred due to exceeding usage limits or overage charges.',
    ],
  },
  {
    title: 'Service Outages and Downtime',
    content: [
      'If Easysoft experiences significant downtime (more than 99.5% monthly uptime SLA breach), affected customers may be eligible for service credits.',
      'Service credits are applied to future billing cycles and are not issued as cash refunds.',
      'Credits are calculated proportionally to the duration and severity of the outage.',
      'To report a downtime incident and request a credit, contact our support team within 30 days of the incident.',
    ],
  },
  {
    title: 'How to Request a Refund',
    content: [
      'Email hello@easysoft.dev with the subject line "Refund Request".',
      'Include your account email address, subscription plan, and reason for the refund.',
      'Our team will respond within 2 business days to review your request.',
      'Approved refunds are processed within 5–10 business days.',
      'Refunds are issued to the original payment method only.',
    ],
  },
  {
    title: 'Chargebacks',
    content: 'We encourage you to contact us before initiating a chargeback with your bank or card provider. Unauthorized chargebacks may result in account suspension. If a chargeback is filed, we reserve the right to dispute it with supporting transaction evidence.',
  },
  {
    title: 'Changes to This Policy',
    content: 'Easysoft LLC reserves the right to modify this Refund Policy at any time. Changes will be communicated via email or in-app notification. Continued use of the Services after changes constitutes your acceptance of the revised policy.',
  },
]

export default function RefundPage() {
  return (
    <LegalLayout
      badge="Legal · Easysoft LLC"
      title="Refund Policy"
      subtitle="We want you to be completely satisfied with Easysoft. This policy explains your refund rights, how to request a refund, and what to expect during the process."
      effectiveDate="January 1, 2025"
      sections={sections}
    />
  )
}