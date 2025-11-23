import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './layouts/main-layout';
import { Home } from './pages/home';
import { CourseList } from './pages/courses/list';
import { CreateCourse } from './pages/courses/create';
import { EditCourse } from './pages/courses/edit';
import { QuestionnaireIndex } from './pages/questionnaire';
import { RecommendationResult } from './pages/questionnaire/result';
import { Team } from './pages/team';
import { About } from './pages/about';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/courses', element: <CourseList /> },
      { path: '/courses/create', element: <CreateCourse /> },
      { path: '/courses/edit/:id', element: <EditCourse /> },
      { path: '/questionnaire', element: <QuestionnaireIndex /> },
      { path: '/questionnaire/result', element: <RecommendationResult /> },
      { path: '/team', element: <Team /> },
      { path: '/about', element: <About /> },
    ],
  },
]);