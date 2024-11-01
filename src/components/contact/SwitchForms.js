"use client";

import { useState } from "react";
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
        {isB2B ? <ContactB2BForm /> : <ContactB2CForm />}
      </div>
    </div>
  );
}
