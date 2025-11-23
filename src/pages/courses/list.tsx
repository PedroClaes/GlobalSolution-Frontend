import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { type Course } from '../../types/course';
import { fetchCourses, deleteCourse } from '../../api/courses';
import { CourseCard } from '../../components/course-card';
import { Plus } from 'lucide-react';

export const CourseList = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  const loadCourses = async () => {
    setLoading(true);
    const data = await fetchCourses();
    setCourses(data);
    setLoading(false);
  };

  useEffect(() => {
    loadCourses();
  }, []);

  // CORREÇÃO: Agora aceita number para bater com o tipo do Java
  const handleDelete = async (id: number) => {
    if (confirm('Tem certeza que deseja excluir este curso?')) {
      await deleteCourse(id);
      await loadCourses();
    }
  };

  if (loading) return <div className="text-center py-10">Carregando cursos...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Cursos Disponíveis</h2>
        <Link to="/courses/create" className="btn-primary flex items-center gap-2">
          <Plus size={20} /> Novo Curso
        </Link>
      </div>

      {courses.length === 0 ? (
        <div className="text-center py-12 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <p className="text-gray-500 mb-4">Nenhum curso cadastrado ainda.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* CORREÇÃO: Usando idCurso como key */}
          {courses.map(course => (
            <CourseCard key={course.idCurso} course={course} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};