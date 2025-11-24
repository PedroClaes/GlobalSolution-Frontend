import type { Course } from "../types/course";

const API_URL = `${import.meta.env.VITE_API_URL}/cursos`;

export const fetchCourses = async (): Promise<Course[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Erro ao buscar cursos');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchCourseById = async (id: number): Promise<Course | null> => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error('Curso não encontrado');
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const createCourse = async (course: Omit<Course, 'idCurso'>): Promise<void> => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(course),
    });
    if (!response.ok) throw new Error('Erro ao criar curso');
  } catch (error) {
    throw error;
  }
};

export const updateCourse = async (id: number, course: Course): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(course),
    });
    if (!response.ok) throw new Error('Erro ao atualizar curso');
  } catch (error) {
    throw error;
  }
};

export const deleteCourse = async (id: number): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Erro ao deletar curso');
  } catch (error) {
    throw error;
  }
};