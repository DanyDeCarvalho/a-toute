"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function QuestionsAsked() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Comment puis-je créer un compte ?</AccordionTrigger>
        <AccordionContent>
          Pour créer un compte, cliquez sur le bouton "S'inscrire" en haut à
          droite de la page d'accueil. Remplissez ensuite le formulaire avec vos
          informations personnelles et suivez les instructions à l'écran.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          Quels sont les modes de paiement acceptés ?
        </AccordionTrigger>
        <AccordionContent>
          Nous acceptons les cartes de crédit (Visa, MasterCard, American
          Express), PayPal, et les virements bancaires pour certains pays.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          Comment puis-je réinitialiser mon mot de passe ?
        </AccordionTrigger>
        <AccordionContent>
          Sur la page de connexion, cliquez sur "Mot de passe oublié ?". Entrez
          votre adresse e-mail et nous vous enverrons un lien pour réinitialiser
          votre mot de passe.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Proposez-vous un support client ?</AccordionTrigger>
        <AccordionContent>
          Oui, notre équipe de support est disponible 24/7. Vous pouvez nous
          contacter par e-mail à support@example.com ou par chat en direct sur
          notre site web.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          Quelle est votre politique de remboursement ?
        </AccordionTrigger>
        <AccordionContent>
          Nous offrons un remboursement complet dans les 30 jours suivant
          l'achat si vous n'êtes pas satisfait de nos services. Contactez notre
          support client pour initier le processus de remboursement.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
