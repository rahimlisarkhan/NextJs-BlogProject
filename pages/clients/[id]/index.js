import {getAllProjects} from '../../../data/dummy-data'
import { useRouter } from "next/router";


let ClientsProjectPage = () => {

  const projects = getAllProjects()
  const router = useRouter();
  const handlerProject = (id, clientprojectid) => {

    router.push({
        pathname:'/clients/[id]/[clientprojectid]',
        query:{ id, clientprojectid}, //or slug name
    })        

  };


  return (
    <div className="client-project">
       <h1>Clients Project Page</h1>

        <div className="client-project__container">
          {projects.map((propject) => (
            <div className="client-project__container__card">
              <h1>{propject.name}</h1>
              <button
                onClick={() => handlerProject(router.query.id, propject.id)}>
                
                Load more
              </button>
            </div>
          ))}
        </div>
    </div>
  );
};

export default ClientsProjectPage;
