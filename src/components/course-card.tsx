// src/components/course-card.tsx
import { Link } from 'react-router-dom';
import { Edit, Trash2, ExternalLink, Clock, DollarSign } from 'lucide-react';
import type { Course } from '../types/course';

interface CourseCardProps {
  course: Course;
  onDelete?: (id: number) => void; // ID agora é number
}

export const CourseCard = ({ course, onDelete }: CourseCardProps) => {
  // Formatação de moeda para BRL
  const precoFormatado = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(course.vlCurso);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-start mb-4">
          {/* Usando dsPlataforma como categoria */}
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold dark:bg-blue-900 dark:text-blue-200 uppercase">
            {course.dsPlataforma}
          </span>
          
          {/* Duração em Horas */}
          <span className="flex items-center gap-1 text-xs px-2 py-1 rounded-full border border-gray-300 text-gray-600 dark:text-gray-300">
            <Clock size={12} /> {course.qtHoras}h
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {course.nmCurso}
        </h3>
        
        {/* Preço em destaque */}
        <div className="mb-4 flex items-center gap-1 text-green-600 font-bold text-lg">
            <DollarSign size={18} />
            {course.vlCurso === 0 ? 'Gratuito' : precoFormatado}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700 mt-4">
        <a 
          href={course.dsLink} 
          target="_blank" 
          rel="noreferrer"
          className="text-blue-600 dark:text-blue-400 text-sm flex items-center gap-1 hover:underline"
        >
          Acessar <ExternalLink size={14} />
        </a>

        {onDelete && course.idCurso && (
          <div className="flex gap-2">
            <Link 
              to={`/courses/edit/${course.idCurso}`}
              className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full"
            >
              <Edit size={18} />
            </Link>
            <button 
              onClick={() => course.idCurso && onDelete(course.idCurso)}
              className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-full"
            >
              <Trash2 size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};