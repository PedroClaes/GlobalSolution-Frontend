import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { fetchCourses } from '../../api/courses';
import { getRecommendations } from '../../utils/recommendation-engine';
import { CourseCard } from '../../components/course-card';
import { RefreshCw } from 'lucide-react';
import type { Course, QuestionnaireAnswers } from '../../types/course';

export const RecommendationResult = () => {
  const { state } = useLocation();
  const [recommendations, setRecommendations] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAndFilter = async () => {
      if (!state?.answers) return;
      
      const allCourses = await fetchCourses();
      const filtered = getRecommendations(allCourses, state.answers as QuestionnaireAnswers);
      setRecommendations(filtered);
      setLoading(false);
    };

    loadAndFilter();
  }, [state]);

  if (!state?.answers) {
    return (
      <div className="text-center">
        <p>Nenhuma resposta encontrada.</p>
        <Link to="/questionnaire" className="text-blue-500 underline">Voltar ao questionário</Link>
      </div>
    );
  }

  if (loading) return <div className="text-center py-10">Analisando seu perfil...</div>;

  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Cursos Recomendados para Você</h2>
        <p className="text-gray-600 dark:text-gray-300">Baseado no seu interesse em <span className="font-bold text-blue-600 uppercase">{state.answers.interest}</span></p>
      </div>

      {recommendations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map(course => (
            <CourseCard key={course.idCurso} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center bg-yellow-50 dark:bg-yellow-900/20 p-8 rounded-lg">
          <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-2">Nenhum match exato encontrado</h3>
          <p className="mb-4">Tente ajustar suas preferências ou explore todos os cursos.</p>
          <Link to="/courses" className="btn-primary">Ver Todos os Cursos</Link>
        </div>
      )}

      <div className="mt-12 text-center">
        <Link to="/questionnaire" className="btn-secondary inline-flex items-center gap-2">
          <RefreshCw size={18} /> Refazer Questionário
        </Link>
      </div>
    </div>
  );
};