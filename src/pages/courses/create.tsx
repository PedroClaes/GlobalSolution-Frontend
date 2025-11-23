import { CourseForm } from '../../components/course-form';
import { createCourse } from '../../api/courses';
import { useNavigate } from 'react-router-dom';
import { type Course } from '../../types/course';

export const CreateCourse = () => {
  const navigate = useNavigate();

  const handleCreate = async (data: Course) => {
    try {
      await createCourse(data);
      navigate('/courses');
    } catch (error) {
      alert('Erro ao criar curso');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Cadastrar Novo Curso</h2>
      <CourseForm onSubmit={handleCreate} />
    </div>
  );
};