import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navbar';

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="border-t border-gray-200 dark:border-gray-800 py-6 text-center text-gray-500 text-sm">
        © 2025 CourseMatch Platform - Projeto Acadêmico
      </footer>
    </div>
  );
};