import { useState, type FormEvent } from 'react';
import type { Course } from '../types/course';
import { courseSchema } from '../schemas/course-schema';
import { ZodError } from 'zod';

interface CourseFormProps {
  initialData?: Course;
  onSubmit: (data: Course) => void;
}

export const CourseForm = ({ initialData, onSubmit }: CourseFormProps) => {
  // Estado inicial com os campos do JAVA
  const [formData, setFormData] = useState({
    nmCurso: initialData?.nmCurso || '',
    dsPlataforma: initialData?.dsPlataforma || '',
    dsLink: initialData?.dsLink || '',
    vlCurso: initialData?.vlCurso || 0,
    qtHoras: initialData?.qtHoras || 1,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    try {
      // 1. Validação Zod
      const validatedData = courseSchema.parse(formData);
      
      // 2. Enviar
      // @ts-ignore
      await onSubmit(validatedData);
      
    } catch (err) {
      // SOLUÇÃO DEFINITIVA: Convertemos tudo para 'any' imediatamente
      const errorAny = err as any;

      // Erro de Validação Zod
      if (err instanceof ZodError) {
        const fieldErrors: Record<string, string> = {};
        
        // AQUI ESTAVA O ERRO: Agora usamos 'errorAny' em vez de 'err'
        // O TS confia no 'any' e para de reclamar da propriedade .errors
        errorAny.errors.forEach((issue: any) => {
          if (issue.path[0]) {
            fieldErrors[issue.path[0]] = issue.message;
          }
        });
        
        setErrors(fieldErrors);
        return;
      }

      // Erro de Servidor (Fallback)
      // Verificamos se NÃO existe a propriedade errors (indicando erro de rede/fetch)
      if (!errorAny.errors) {
        alert("Erro de Conexão: Verifique se o Backend Java está rodando.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
      
      {/* Nome do Curso */}
      <div>
        <label className="block mb-2 text-sm font-medium">Nome do Curso</label>
        <input 
          value={formData.nmCurso}
          onChange={e => setFormData({...formData, nmCurso: e.target.value})}
          className="input-field"
          placeholder="Ex: Java Fundamentos"
        />
        {errors.nmCurso && <span className="text-red-500 text-sm">{errors.nmCurso}</span>}
      </div>

      {/* Plataforma */}
      <div>
        <label className="block mb-2 text-sm font-medium">Plataforma (Categoria)</label>
        <input 
          value={formData.dsPlataforma}
          onChange={e => setFormData({...formData, dsPlataforma: e.target.value})}
          className="input-field"
          placeholder="Ex: Udemy, Alura, Youtube..."
        />
        {errors.dsPlataforma && <span className="text-red-500 text-sm">{errors.dsPlataforma}</span>}
      </div>

      {/* Link */}
      <div>
        <label className="block mb-2 text-sm font-medium">Link de Acesso</label>
        <input 
          value={formData.dsLink}
          onChange={e => setFormData({...formData, dsLink: e.target.value})}
          className="input-field"
          placeholder="https://..."
        />
        {errors.dsLink && <span className="text-red-500 text-sm">{errors.dsLink}</span>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Valor */}
        <div>
          <label className="block mb-2 text-sm font-medium">Valor (R$)</label>
          <input 
            type="number"
            step="0.01"
            value={formData.vlCurso}
            onChange={e => setFormData({...formData, vlCurso: Number(e.target.value)})}
            className="input-field"
          />
          {errors.vlCurso && <span className="text-red-500 text-sm">{errors.vlCurso}</span>}
        </div>

        {/* Carga Horária */}
        <div>
          <label className="block mb-2 text-sm font-medium">Carga Horária (Horas)</label>
          <input 
            type="number"
            value={formData.qtHoras}
            onChange={e => setFormData({...formData, qtHoras: Number(e.target.value)})}
            className="input-field"
          />
          {errors.qtHoras && <span className="text-red-500 text-sm">{errors.qtHoras}</span>}
        </div>
      </div>

      <button type="submit" className="btn-primary w-full">
        Salvar Curso
      </button>
    </form>
  );
};