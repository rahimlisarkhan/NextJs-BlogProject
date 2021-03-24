import { useRouter } from "next/router";

let ClientsProjectPage = () => {
  //data
  const projects = [
    { id: 1, name: "Project-A" },
    { id: 2, name: "Project-B" },
    { id: 3, name: "Project-C" },
    { id: 4, name: "Project-D" },
    { id: 5, name: "Project-E" },
  ];

  let router = useRouter();

  let handlerProject = (clientId, projectId) => {

    router.push({
        pathname:'/clients/[id]/[clientprojectid]',
        query:{ id:`${clientId}`,  clientprojectid:`${projectId}`}, //or slug name
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
