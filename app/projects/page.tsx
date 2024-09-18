import { completedProjects } from "./projectsContent";
const Projects = () => {
  return (
    <>
      {/* Heading */}
      <div className="bg-red-600 h-52 flex items-center pl-12">
        <h1 className="text-white text-4xl font-bold">Projects</h1>
      </div>
      {/* Content */}
      <div className="p-12">
        <h2 className="text-2xl font-bold">Completed Projects</h2>
        <div className="mt-8 grid grid-cols-2 gap-6">
          {completedProjects.map((item, index) => (
            <div key={index} className="ml-4">
              <h3 className="text-xl font-bold mb-4">{item.city}</h3>
              <ul className="space-y-2">
                {item.projects.map((name, index) => (
                  <li className="flex items-start" key={index}>
                    <span className="text-red-600 mr-2">•</span>

                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
