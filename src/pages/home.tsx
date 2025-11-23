import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Descubra seu próximo passo
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl">
        Nossa plataforma utiliza um sistema inteligente para conectar seus interesses aos melhores cursos disponíveis na nossa base.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/questionnaire" className="btn-primary flex items-center gap-2 text-lg px-8 py-4">
          Fazer Questionário <ArrowRight size={20} />
        </Link>
        <Link to="/courses" className="btn-secondary flex items-center gap-2 text-lg px-8 py-4">
          Ver Todos os Cursos <Search size={20} />
        </Link>
      </div>
    </div>
  );
};