export const About = () => {
  return (
    <div className="max-w-3xl mx-auto prose dark:prose-invert">
      <h2 className="text-3xl font-bold mb-6">Sobre o Projeto NextStep</h2>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
        <h3 className="text-xl font-bold mb-2">O que é?</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Uma plataforma desenvolvida para a Global Solution da FIAP, com o objetivo de recomendar cursos baseados no perfil do usuário utilizando React, Java e Oracle.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold">Perguntas Frequentes (FAQ)</h3>
        
        <details className="group bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer">
          <summary className="font-medium flex justify-between items-center">
            Como funciona a recomendação?
            <span className="group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
            Utilizamos um algoritmo no front-end que cruza seus interesses e tempo disponível com nossa base de dados vinda da API Java.
          </p>
        </details>

        <details className="group bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer">
          <summary className="font-medium flex justify-between items-center">
            Quais tecnologias foram usadas?
            <span className="group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
            Front-end: React, Vite, Tailwind, TypeScript.<br/>
            Back-end: Java, Quarkus, Oracle Database.
          </p>
        </details>
      </div>
    </div>
  );
};