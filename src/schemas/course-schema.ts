import { z } from 'zod';

export const courseSchema = z.object({
  nmCurso: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  dsPlataforma: z.string().min(2, "Plataforma é obrigatória"),
  dsLink: z.string().url("Deve ser uma URL válida"),
  vlCurso: z.coerce.number().min(0, "O valor não pode ser negativo"),
  qtHoras: z.coerce.number().min(1, "A carga horária deve ser de no mínimo 1h"),
});

export type CourseFormData = z.infer<typeof courseSchema>;