'use server';

import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey('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');

export async function sendEmail({ email, subject, telephone, raisonSocial, prenom, nom }) {
  try {
    raisonSocial == undefined ? raisonSocial = '' : raisonSocial;
    prenom == undefined ? prenom = '' : prenom;
    nom == undefined ? nom = '' : nom;
    await sendgrid.send({
      to : 'testmailbox780@gmail.com',
      from: 'dany-de-carvalho@outlook.fr', // l'adresse d'envoi validée dans SendGrid
      subject : 'Nouveau message de contact',
      text: raisonSocial + ' ' + prenom + ' '+ nom + ' ' + email + ' ' + telephone + ' ' + subject,
    });
    return { success: true, message: 'Email envoyé avec succès !' };
  } catch (error) {
    console.error('Erreur d\'envoi de l\'email :', error);
    return { success: false, message: 'Erreur lors de l\'envoi de l\'email.' };
  }
}