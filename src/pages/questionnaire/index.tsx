import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { QuestionnaireAnswers } from '../../types/course';


export const QuestionnaireIndex = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Partial<QuestionnaireAnswers>>({});

  const handleChange = (field: keyof QuestionnaireAnswers, value: string) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    
    navigate('/questionnaire/result', { state: { answers } });
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Perfil de Aprendizado</h2>
      
      <div className="space-y-8 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        
        {/* Pergunta 1 */}
        <div>
          <label className="block text-lg font-medium mb-3">Qual sua área de maior interesse?</label>
          <select 
            className="input-field"
            onChange={(e) => handleChange('interest', e.target.value)}
            defaultValue=""
          >
            <option value="" disabled>Selecione...</option>
            <option value="frontend">Front-end (Interfaces)</option>
            <option value="backend">Back-end (Servidores/APIs)</option>
            <option value="design">UI/UX Design</option>
            <option value="data">Dados & Analytics</option>
          </select>
        </div>

        {/* Pergunta 2 */}
        <div>
          <label className="block text-lg font-medium mb-3">Qual seu nível atual de conhecimento?</label>
          <div className="space-y-2">
            {['none', 'basic', 'advanced'].map(opt => (
              <label key={opt} className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <input 
                  type="radio" 
                  name="experience" 
                  value={opt}
                  onChange={(e) => handleChange('experience', e.target.value)}
                />
                <span className="capitalize">
                  {opt === 'none' ? 'Nenhum / Começando' : opt === 'basic' ? 'Básico / Estudante' : 'Avançado / Profissional'}
                </span>
              </label>
            ))}
          </div>
        </div>

         {/* Pergunta 3 */}
         <div>
          <label className="block text-lg font-medium mb-3">Qual formato você prefere?</label>
          <select 
            className="input-field"
            onChange={(e) => handleChange('preference', e.target.value)}
            defaultValue=""
          >
            <option value="" disabled>Selecione...</option>
            <option value="video">Vídeo Aulas</option>
            <option value="reading">Artigos e Livros</option>
            <option value="interactive">Exercícios Interativos</option>
          </select>
        </div>

        <button 
          onClick={handleSubmit}
          disabled={!answers.interest || !answers.experience}
          className="btn-primary w-full text-lg py-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Ver Recomendações
        </button>
      </div>
    </div>
  );
};