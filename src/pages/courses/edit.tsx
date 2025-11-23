import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCourseById, updateCourse } from '../../api/courses';
import { CourseForm } from '../../components/course-form';
import type { Course } from '../../types/course';

export const EditCourse = () => {
  const { id } = useParams<{ id: string }>(); 
  const navigate = useNavigate();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      
      fetchCourseById(Number(id)).then(data => {
        setCourse(data);
        setLoading(false);
      });
    }
  }, [id]);

  const handleUpdate = async (data: Course) => {
    if (id) {
      try {
        
        await updateCourse(Number(id), data);
        navigate('/courses');
      } catch (error) {
        alert('Erro ao atualizar');
      }
    }
  };

  if (loading) return <div>Carregando...</div>;
  if (!course) return <div>Curso não encontrado</div>;

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Editar Curso</h2>
      <CourseForm initialData={course} onSubmit={handleUpdate} />
    </div>
  );
};