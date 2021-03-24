import Link from "next/link";
import Header from "../../components/Header";
import Head from "next/head";

let ClientPage = () => {
  //data
  const clients = [
    { id: 1, name: "Adam" },
    { id: 2, name: "Ashley" },
    { id: 3, name: "John" },
    { id: 4, name: "Joe" },
    { id: 5, name: "Marry" },
    { id: 6, name: "Maria" },
  ];

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
