"use server";

import { ImageSection } from "@/components/faq/ImageSection";
import QuestionsAsked from "@/components/faq/QuestionsAsked";

export default async function FaqPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Foire Aux Questions
      </h1>

      <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
        Bienvenue sur notre page FAQ. Nous avons rassemblé les questions les
        plus fréquemment posées pour vous aider à trouver rapidement les
        informations dont vous avez besoin.
      </p>

      <ImageSection
        imageSrc="/atotue2.PNG?height=300&width=500"
        imageAlt="Support client"
        title="Notre engagement envers vous"
        description="Chez A toute, nous nous engageons à fournir un service client exceptionnel. Notre équipe est disponible 24/7 pour répondre à vos questions et résoudre vos problèmes."
      />

      <div className="max-w-3xl mx-auto my-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Questions fréquentes
        </h2>
        <QuestionsAsked />
      </div>

      <ImageSection
        imageSrc="/atoute.PNG?height=300&width=500"
        imageAlt="Processus de remboursement"
        title="Notre politique de remboursement"
        description="Nous croyons en la qualité de nos produits et services. C'est pourquoi nous offrons une garantie de remboursement de 30 jours. Votre satisfaction est notre priorité."
        isReversed={true}
      />

      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold mb-4">
          Vous n'avez pas trouvé votre réponse ?
        </h2>
        <p className="text-lg mb-6">
          Notre équipe de support est là pour vous aider. N'hésitez pas à nous
          contacter pour toute question supplémentaire.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Contactez-nous
        </button>
      </div>
    </div>
  );
}
