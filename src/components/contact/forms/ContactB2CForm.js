"use client";

import { sendEmail } from "@/app/action";
import { useState } from "react";
import { SendIcon } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Tiptap from "@/components/Tiptap/Tiptap";

const formSchema = z.object({
  email: z.string().email({ message: "Entrez une adresse mail 📧" }),
  telephone: z
    .string({ message: "Renseignez un numero pour pouvoir vous joindre ☎️" })
    .min(10, { message: "Numéro de téléphone trop court" })
    .max(10, { message: "Numéro de téléphone trop long" }),
  demande: z
    .string({
      message:
        "Expliquez votre demande pour que nous puissions vous aider au mieux 🙋‍♂️",
    })
    .min(10, { message: "Demande trop courte ! Soyez plus explicite 😊" }),
  prenom: z.string().min(1, { message: "Votre prénom est obligatoire" }),
  nom: z.string().min(1, { message: "Votre nom est obligatoire" }),
});

export default function ContactB2CForm() {
  const [responseMessage, setResponseMessage] = useState(null);
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = async (values) => {
    const result = await sendEmail({
      email: values.email,
      subject: values.demande,
      telephone: values.telephone,
      prenom: values.prenom,
      nom: values.nom,
    });
    setResponseMessage(result.message);
    toast(result.message);
    form.reset();
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      telephone: "",
      demande: "",
      prenom: "",
      nom: "",
    },
  });

  return (
    <div className="flex items-center justify-center w-full h-full ">
      <Form {...form}>
        <form
          className="w-4/12 flex flex-col gap-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="flex gap-6 justify-between">
            <div className="w-1/2">
              <FormField
                control={form.control}
                name="nom"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel>Nom</FormLabel>
                    </div>
                    <FormControl>
                      <Input placeholder="Nom" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-1/2">
              <FormField
                control={form.control}
                name="prenom"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel>Prénom</FormLabel>
                    </div>
                    <FormControl>
                      <Input placeholder="Prénom" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex gap-6 w-full">
            <div className="w-1/2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel>Email</FormLabel>
                    </div>
                    <FormControl>
                      <Input placeholder="Votre email" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-1/2">
              <FormField
                control={form.control}
                name="telephone"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel>Telephone</FormLabel>
                    </div>
                    <FormControl>
                      <Input
                        placeholder="Votre telephone"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div>
            <FormField
              control={form.control}
              name="demande"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center">
                    <FormLabel>Demande</FormLabel>
                  </div>
                  <FormControl>
                    <Tiptap placeholder="Demande" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit">
            <SendIcon className="mr-2 h-4 w-4" />
            Envoyer
          </Button>
        </form>
      </Form>
      <ToastContainer />
    </div>
  );
}
