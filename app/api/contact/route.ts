import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

const budgetLabels: Record<string, string> = {
  'under-5k': 'Under $5,000',
  '5k-15k': '$5,000 – $15,000',
  '15k-50k': '$15,000 – $50,000',
  '50k-plus': '$50,000+',
}

function getEmailHtml({
  firstName,
  email,
  companyName,
  projectBudget,
  projectBrief,
}: {
  firstName: string
  email: string
  companyName: string
  projectBudget: string
  projectBrief: string
}) {
  const now = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const budgetLabel = budgetLabels[projectBudget] || '—'

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Project Inquiry</title>
</head>
<body style="margin:0;padding:0;background-color:#0a0a0a;font-family:'Segoe UI',Helvetica,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0a;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- TOP LABEL -->
          <tr>
            <td align="center" style="padding-bottom:20px;">
              <span style="display:inline-flex;align-items:center;gap:6px;background:#0f1f0f;border:1px solid #81fa0030;border-radius:100px;padding:6px 16px;font-size:11px;font-weight:600;color:#81fa00;letter-spacing:2.5px;text-transform:uppercase;">
                ● &nbsp;New Form Submission
              </span>
            </td>
          </tr>

          <!-- CARD -->
          <tr>
            <td style="background:#111811;border:1px solid #1e2e1e;border-radius:20px;overflow:hidden;">

              <!-- HEADER BANNER -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:linear-gradient(135deg,#0c1f0e 0%,#0f2a12 50%,#0a1a0c 100%);padding:40px 40px 32px;border-bottom:1px solid #81fa0018;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <p style="margin:0 0 10px;font-size:12px;font-weight:600;color:#81fa00;letter-spacing:2px;text-transform:uppercase;">Project Inquiry</p>
                          <h1 style="margin:0 0 6px;font-size:30px;font-weight:700;color:#ffffff;line-height:1.2;">
                            ${firstName} wants to work with you
                          </h1>
                          <p style="margin:0;font-size:13px;color:#4d6b52;">${now}</p>
                        </td>
                        <td align="right" valign="top">
                          <table cellpadding="0" cellspacing="0">
                            <tr>
                              <td width="52" height="52" align="center" valign="middle"
                                style="width:52px;height:52px;background:#81fa0015;border:1px solid #81fa0030;border-radius:14px;font-size:22px;">
                                ✉️
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- BODY -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:36px 40px;">

                    <!-- CONTACT INFO GRID -->
                    <p style="margin:0 0 14px;font-size:11px;font-weight:600;color:#4d6b52;letter-spacing:2px;text-transform:uppercase;">Contact Details</p>
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                      <tr>
                        <td width="48%" style="background:#0d1a0e;border:1px solid #1e2e1e;border-radius:12px;padding:16px 20px;vertical-align:top;">
                          <p style="margin:0 0 5px;font-size:10px;font-weight:600;color:#4d6b52;letter-spacing:1.5px;text-transform:uppercase;">Full Name</p>
                          <p style="margin:0;font-size:15px;font-weight:600;color:#f0f0f0;">${firstName}</p>
                        </td>
                        <td width="4%"></td>
                        <td width="48%" style="background:#0d1a0e;border:1px solid #1e2e1e;border-radius:12px;padding:16px 20px;vertical-align:top;">
                          <p style="margin:0 0 5px;font-size:10px;font-weight:600;color:#4d6b52;letter-spacing:1.5px;text-transform:uppercase;">Email Address</p>
                          <p style="margin:0;font-size:15px;font-weight:600;color:#81fa00;">${email}</p>
                        </td>
                      </tr>
                    </table>

                    <!-- COMPANY & BUDGET -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                      <tr>
                        <td width="48%" style="background:#0d1a0e;border:1px solid #1e2e1e;border-radius:12px;padding:16px 20px;vertical-align:top;">
                          <p style="margin:0 0 5px;font-size:10px;font-weight:600;color:#4d6b52;letter-spacing:1.5px;text-transform:uppercase;">Company</p>
                          <p style="margin:0;font-size:15px;font-weight:600;color:#f0f0f0;">${companyName || '—'}</p>
                        </td>
                        <td width="4%"></td>
                        <td width="48%" style="background:#0d1a0e;border:1px solid #81fa0020;border-radius:12px;padding:16px 20px;vertical-align:top;">
                          <p style="margin:0 0 5px;font-size:10px;font-weight:600;color:#4d6b52;letter-spacing:1.5px;text-transform:uppercase;">Project Budget</p>
                          <p style="margin:0;font-size:15px;font-weight:700;color:#81fa00;">${budgetLabel}</p>
                        </td>
                      </tr>
                    </table>

                    <!-- DIVIDER -->
                    <div style="border-top:1px solid #1a2b1a;margin-bottom:28px;"></div>

                    <!-- PROJECT BRIEF -->
                    <p style="margin:0 0 14px;font-size:11px;font-weight:600;color:#4d6b52;letter-spacing:2px;text-transform:uppercase;">Project Brief</p>
                    <div style="background:#0d1a0e;border:1px solid #1e2e1e;border-left:3px solid #81fa00;border-radius:0 12px 12px 0;padding:22px 24px;margin-bottom:32px;">
                      <p style="margin:0;font-size:15px;color:#c8d8ca;line-height:1.8;">${projectBrief}</p>
                    </div>

                    <!-- CTA BUTTON -->
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="border-radius:100px;background:#81fa00;">
                          <a href="mailto:${email}?subject=Re: Your Project Inquiry"
                             style="display:inline-block;padding:14px 32px;font-size:14px;font-weight:700;color:#000000;text-decoration:none;border-radius:100px;letter-spacing:0.3px;">
                            Reply to ${firstName} &rarr;
                          </a>
                        </td>
                        <td width="12"></td>
                        <td style="border-radius:100px;border:1px solid #2a3d2a;">
                          <a href="mailto:${email}"
                             style="display:inline-block;padding:14px 32px;font-size:14px;font-weight:600;color:#81fa00;text-decoration:none;border-radius:100px;">
                            ${email}
                          </a>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </table>

              <!-- FOOTER -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:20px 40px;border-top:1px solid #161e16;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <p style="margin:0;font-size:12px;color:#2e402e;">This message was sent via your website contact form</p>
                        </td>
                        <td align="right">
                          <p style="margin:0;font-size:12px;color:#2e402e;">Do not reply to this automated email</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- BOTTOM PADDING -->
          <tr><td style="height:32px;"></td></tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
  `
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { firstName, email, companyName, projectBudget, projectBrief } = body

    if (!firstName || !email || !projectBrief) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'Easy Soft Contact Form <onboarding@resend.dev>', 
      to: ['nazmulhasan00068@gmail.com'],
      replyTo: email,
      subject: `New Inquiry from ${firstName}${companyName ? ` · ${companyName}` : ''}`,
      html: getEmailHtml({ firstName, email, companyName, projectBudget, projectBrief }),
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err: any) {
    console.error('API route error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}