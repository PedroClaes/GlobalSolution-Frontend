import { Github, Linkedin} from 'lucide-react';
import fotoIntegrante1 from '../assets/Pedro.jpeg'; 
import fotoIntegrante2 from '../assets/Artur.jpeg';
import fotoIntegrante3 from '../assets/Matheus.jpeg';
export const Team = () => {
 
  const members = [
    {
      name: "Pedro Gabriel Claes",
      rm: "RM566058",
      turma: "1TDSPV",
      image: fotoIntegrante1, 
      github: "https://github.com/PedroClaes",
      linkedin: "https://www.linkedin.com/in/pedro-gabriel-claes-301874279/"
    },

    {
      name: "Matheus Arazin",
      rm: "RM556649",
      turma: "1TDSPV",
      image: fotoIntegrante3, 
      github: "https://github.com/Mathzoba",
      linkedin: "https://www.linkedin.com/in/matheus-arazin?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },

    {
      name: "Artur Pioli",
      rm: "RM565597",
      turma: "1TDSPV",
      image: fotoIntegrante2,
      github: "https://github.com/poiuytrewq01",
      linkedin: "https://www.linkedin.com/in/artur-pioli-57b749345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
   
  ];

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Integrantes do Projeto
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
        {members.map((member) => (
          <div key={member.rm} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col items-center transition-transform hover:scale-105">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-32 h-32 rounded-full mb-4 border-4 border-blue-500 object-cover"
            />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-1">RM: {member.rm}</p>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{member.turma}</p>
            
            <div className="flex gap-4">
              <a href={member.github} target="_blank" rel="noreferrer" className="p-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors">
                <Github size={20} />
              </a>
              <a href={member.linkedin} target="_blank" rel="noreferrer" className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};