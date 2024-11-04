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
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Tiptap from "@/components/Tiptap/Tiptap";
import { motion } from "framer-motion";
import ButtonSubmitForm from "./ButtonSubmitForm";

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
  raisonSocial: z
    .string({ message: "Quel est le nom de votre entreprise ? 🏢" })
    .min(2, { message: "Quel est le nom de votre entreprise ? 🏢" }),
});

export default function ContactB2BForm() {
  const [responseMessage, setResponseMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (values) => {
    setIsSubmitting(true);
    const result = await sendEmail({
      email: values.email,
      subject: values.demande,
      telephone: values.telephone,
      raisonSocial: values.raisonSocial,
    });
    setResponseMessage(result.message);
    toast.success(result.message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      pauseOnFocusLoss: false,
      theme: "light",
      transition: Bounce,
    });
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      telephone: "",
      demande: "",
      raisonSocial: "",
    },
  });

  return (
    <div className="flex items-center justify-center w-full h-full ">
      <Form {...form}>
        <form
          className="w-10/12 md:w-full flex flex-col gap-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div>
            <FormField
              control={form.control}
              name="raisonSocial"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center">
                    <FormLabel>Raison Social</FormLabel>
                  </div>
                  <FormControl>
                    <Input placeholder="Raison Social" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="md:w-1/2">
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
            <div className="md:w-1/2">
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
          <div className="w-full">
            <FormField
              className="w-full"
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

          <ButtonSubmitForm
            isSubmitting={isSubmitting}
            setIsSubmitted={setIsSubmitted}
            isSubmitted={isSubmitted}
          />
        </form>
      </Form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />
    </div>
  );
}
