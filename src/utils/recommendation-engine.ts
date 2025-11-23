import type { Course, QuestionnaireAnswers } from '../types/course';

export const getRecommendations = (courses: Course[], answers: QuestionnaireAnswers): Course[] => {
  return courses.filter(course => {
    let score = 0;
    const textoCurso = (course.nmCurso + ' ' + course.dsPlataforma).toLowerCase();

   
    if (answers.interest === 'frontend' && (textoCurso.includes('front') || textoCurso.includes('react') || textoCurso.includes('js'))) score += 3;
    if (answers.interest === 'backend' && (textoCurso.includes('back') || textoCurso.includes('java') || textoCurso.includes('api'))) score += 3;
    if (answers.interest === 'data' && (textoCurso.includes('sql') || textoCurso.includes('dados') || textoCurso.includes('oracle'))) score += 3;
    

    if (answers.timeAvailable === 'low' && course.qtHoras < 10) score += 2;


    return score >= 1 || answers.interest === 'geral';
  });
};