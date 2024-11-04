"use client";

import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function ButtonSubmitForm({
  isSubmitting,
  setIsSubmitted,
  isSubmitted,
}) {
  return (
    <Button
      className="mb-2"
      type="submit"
      disabled={isSubmitting || isSubmitted}
    >
      <motion.div
        className="flex items-center"
        animate={isSubmitting ? { x: 50, opacity: 0 } : { x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
        onAnimationComplete={() => {
          if (isSubmitting) {
            setIsSubmitted(true);
          }
        }}
      >
        {isSubmitted ? (
          <></>
        ) : (
          <>
            <SendIcon className="mr-2 h-4 w-4" />
            <span>Envoyer</span>
          </>
        )}
      </motion.div>
      {isSubmitted ? (
        <span className="text-center">Formulaire envoyé</span>
      ) : (
        <></>
      )}
    </Button>
  );
}
