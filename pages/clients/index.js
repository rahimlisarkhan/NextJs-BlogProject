import Link from "next/link";
import Header from "../../components/layout/header";
import Head from "next/head";
import {getAllClients} from '../../data/dummy-data'

let ClientPage = () => {
  
  const clients = getAllClients()

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="keywords"
          content="give a short or mid description about the content keywords of your website"
        />
        <meta
          name="description"
          content="give a short or mid description about the contents of your website"
        />
        <meta
          name="author"
          content="write the name of the author of the webpage"
        />
        {/* <meta name="refresh" content="50"/> */}
        <meta
          http-equi="refresh"
          content="5; url='write the url of your website'"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />
      <main className="cleints-container">
        <section>
          <ul>
            {clients.map((client) => (
              <li key={client.id}>
                <Link
                  href={{ pathname: "/clients/[id]", query: { id: client.id } }}
                >
                  {client.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <h1>Client page</h1>
      </main>
    </>
  );
};

export default ClientPage;
