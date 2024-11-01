'use server';

import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey('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');

export async function sendEmail({ email, subject, telephone, raisonSocial, prenom, nom }) {
  try {
    raisonSocial == undefined ? raisonSocial = '' : raisonSocial;
    prenom == undefined ? prenom = '' : prenom;
    nom == undefined ? nom = '' : nom;
    const htmlContent = `
      <p><strong>Raison Sociale:</strong> ${raisonSocial}</p>
      <p><strong>Prénom:</strong> ${prenom}</p>
      <p><strong>Nom:</strong> ${nom}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Téléphone:</strong> ${telephone}</p>
      <p><strong>Demande:</strong> ${subject}</p>
    `;
    await sendgrid.send({
      to : 'testmailbox780@gmail.com',
      from: 'dany-de-carvalho@outlook.fr', // l'adresse d'envoi validée dans SendGrid
      subject : 'Nouveau message de contact',
      html: htmlContent,
    });
    return { success: true, message: 'Email envoyé avec succès !' };
  } catch (error) {
    console.error('Erreur d\'envoi de l\'email :', error);
    return { success: false, message: 'Erreur lors de l\'envoi de l\'email.' };
  }
}