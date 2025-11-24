import { Link } from 'react-router-dom';
import { useTheme } from '../context/theme-context';
import { Sun, Moon, BookOpen } from 'lucide-react';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="border-b bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-blue-600 dark:text-blue-400">
            <BookOpen size={24} />
            <span>CourseMatch</span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/courses" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Cursos</Link>
            <Link to="/questionnaire" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Recomendação</Link>
            
            {/* Links Obrigatórios adicionados */}
            <Link to="/team" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Integrantes</Link>
            <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Sobre</Link>
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Alternar tema"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};