import { z } from 'zod';

const SignupFormSchema = z.object({
  email: z.string().email('Email invalide').nonempty('L\'email est requis'),
  password: z.string().min(8, 'Le mot de passe doit contenir au moins 8 caractères').nonempty('Le mot de passe est requis'),
});

export default SignupFormSchema;