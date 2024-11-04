"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactB2BForm from "./forms/ContactB2BForm";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import ContactB2CForm from "./forms/ContactB2CForm";

export default function SwitchForms() {
  const [isB2B, setIsB2B] = useState(true);

  return (
    <div className="flex items-center justify-center w-full h-full flex-col gap-3">
      <h1 className="text-2xl">Vous etes un :</h1>
      <div className="flex flex-col items-center justify-center gap-12 w-full">
        <div className="flex gap-3">
          <Label className="uppercase font-bold">Professionel</Label>
          <Switch onCheckedChange={() => setIsB2B(!isB2B)} id="airplane-mode" />
          <Label className="uppercase font-bold">Particulier</Label>
        </div>
        <AnimatePresence mode="wait">
          {isB2B ? (
            <motion.div
              key="b2b"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ContactB2BForm />
            </motion.div>
          ) : (
            <motion.div
              key="b2c"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ContactB2CForm />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
