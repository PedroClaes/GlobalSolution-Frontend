
export interface Course {
  idCurso?: number;   
  nmCurso: string;     
  dsPlataforma: string;  
  dsLink: string;     
  vlCurso: number;     
  qtHoras: number;       
  
}

export interface QuestionnaireAnswers {
  interest: 'frontend' | 'backend' | 'design' | 'data' | 'geral';
  experience: 'none' | 'basic' | 'advanced';
  preference: 'video' | 'reading' | 'interactive';
  timeAvailable: 'low' | 'medium' | 'high';
  goal: 'hobby' | 'career' | 'academic';
}