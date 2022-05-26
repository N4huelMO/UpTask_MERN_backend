import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Información de email

  const info = await transport.sendMail({
    from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
    to: email,
    subject: "UpTask - Comprueba tu cuenta",
    text: "Comprueba tu cuenta de UpTask",
    html: `<p>Hola: ${nombre} comprueba tu cuenta en UpTask</p>
    <p>Tu cuenta está casi lista, solo debes comprobarla en el siguiente enlace:</p>

    <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar cuenta</a>

    <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>

    `,
  });
};

export const emailOlivdePassword = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Información de email

  const info = await transport.sendMail({
    from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
    to: email,
    subject: "UpTask - Reestablece tu Password",
    text: "Reestablece tu password de UpTask",
    html: `<p>Hola: ${nombre} has solicitado reestablecer tu password en UpTask</p>
    <p>Sigue el siguiente enlace para reestablecer tu password:</p>

    <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer password</a>

    <p>Si tu no solicitaste este email, puedes ignorar este mensaje</p>

    `,
  });
};
