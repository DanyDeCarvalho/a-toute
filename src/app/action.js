"use server";

import { PrismaClient } from "@prisma/client";
import sendgrid from "@sendgrid/mail";
import bcrypt from "bcrypt";
import SignupFormSchema from "./lib/definitions";
import { createSession, decrypt, verifySession } from "./lib/session";
import { cookies } from "next/headers";
sendgrid.setApiKey(
  "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"
);

const prisma = new PrismaClient();

export async function sendEmail({
  email,
  subject,
  telephone,
  raisonSocial,
  prenom,
  nom,
}) {
  try {
    raisonSocial == undefined ? (raisonSocial = "") : raisonSocial;
    prenom == undefined ? (prenom = "") : prenom;
    nom == undefined ? (nom = "") : nom;
    const htmlContent = `
      <p><strong>Raison Sociale:</strong> ${raisonSocial}</p>
      <p><strong>Prénom:</strong> ${prenom}</p>
      <p><strong>Nom:</strong> ${nom}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Téléphone:</strong> ${telephone}</p>
      <p><strong>Demande:</strong> ${subject}</p>
    `;
    await sendgrid.send({
      to: "testmailbox780@gmail.com",
      from: "dany-de-carvalho@outlook.fr", // l'adresse d'envoi validée dans SendGrid
      subject: "Nouveau message de contact",
      html: htmlContent,
    });
    return { success: true, message: "Email envoyé avec succès !" };
  } catch (error) {
    console.error("Erreur d'envoi de l'email :", error);
    return { success: false, message: "Erreur lors de l'envoi de l'email." };
  }
}

export async function signup({ emailForm, passwordForm }) {
  const validationResult = SignupFormSchema.safeParse({
    email: emailForm,
    password: passwordForm,
  });
  console.log(emailForm);
  if (!validationResult.success) {
    return { errors: validationResult.error.flatten().fieldErrors };
  }

  const { name, email, password } = validationResult.data;
  const hasedPassword = await bcrypt.hash(password, 10);
  console.log(password);

  const data = await prisma.user.create({
    data: { name, email, password: hasedPassword },
  });

  await createSession(data.id);
}

export async function signin({ emailForm, passwordForm }) {
  const validationResult = SignupFormSchema.safeParse({
    email: emailForm,
    password: passwordForm,
  });
  console.log(emailForm);

  if (!validationResult.success) {
    return { errors: validationResult.error.flatten().fieldErrors };
  }

  const { email, password } = validationResult.data;
  const hasedPassword = await bcrypt.hash(password, 10);
  const data = await prisma.user.findFirst({
    where: { email: email },
  });

  if (data) {
    const isValid = await bcrypt.compare(password, data.password);
    if (isValid) {
      await createSession(data.id);
    } else {
      return { errors: { password: "Mot de passe incorrect" } };
    }
  }
}
