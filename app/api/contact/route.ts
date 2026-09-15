import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

type ContactPayload = {
  name?: string
  email?: string
  phone?: string
  city?: string
  message?: string
}

export async function POST(request: Request) {
  let body: ContactPayload
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Cuerpo de solicitud inválido' }, { status: 400 })
  }

  const name = String(body.name ?? '').trim()
  const email = String(body.email ?? '').trim()
  const phone = String(body.phone ?? '').trim()
  const city = String(body.city ?? '').trim()
  const message = String(body.message ?? '').trim()

  if (!name || !phone) {
    return NextResponse.json({ error: 'Nombre y celular son obligatorios' }, { status: 400 })
  }

  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT ?? 587)
  const secure = process.env.SMTP_SECURE === 'true'
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const to = process.env.CONTACT_EMAIL

  if (!host || !user || !pass || !to) {
    console.error('[contact] Falta configuración SMTP en el entorno.')
    return NextResponse.json({ error: 'Servidor no configurado' }, { status: 500 })
  }

  const transport = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  })

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#2b2826;max-width:560px;margin:0 auto;">
      <h2 style="color:#b21d25;">Nueva solicitud de inscripción</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:8px 0;color:#706b67;">Nombre</td><td style="padding:8px 0;font-weight:bold;">${name}</td></tr>
        <tr><td style="padding:8px 0;color:#706b67;">Correo</td><td style="padding:8px 0;font-weight:bold;">${email || 'No indicado'}</td></tr>
        <tr><td style="padding:8px 0;color:#706b67;">Celular</td><td style="padding:8px 0;font-weight:bold;">${phone}</td></tr>
        <tr><td style="padding:8px 0;color:#706b67;">Municipio</td><td style="padding:8px 0;font-weight:bold;">${city || 'No indicado'}</td></tr>
        <tr><td style="padding:8px 0;color:#706b67;">Mensaje</td><td style="padding:8px 0;font-weight:bold;">${message || 'No indicado'}</td></tr>
      </table>
      <p style="font-size:12px;color:#706b67;margin-top:20px;">Enviado desde el formulario del sitio web de BEFAC.</p>
    </div>
  `

  try {
    await transport.sendMail({
      from: `"Sitio web BEFAC" <${user}>`,
      to,
      replyTo: email || user,
      subject: `Nueva solicitud de inscripción – ${name}`,
      text: `Nueva solicitud de inscripción\n\nNombre: ${name}\nCorreo: ${email || 'No indicado'}\nCelular: ${phone}\nMunicipio: ${city || 'No indicado'}\nMensaje: ${message || 'No indicado'}`,
      html,
    })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[contact] Error al enviar el correo:', error)
    return NextResponse.json({ error: 'No se pudo enviar el correo' }, { status: 500 })
  }
}