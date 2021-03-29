import axios from "axios";
import { useEffect, useState } from "react";
import useSWR from "swr";
import Loading from "../../components/ui/loading";


export default function LastSalesPage(props) {
  const [state, setstate] = useState(props.product);

  const { productData, error } = useSWR(
    "https://mars-ecommerce.se-pro.site/api/products/"
  );

  useEffect(() => {
    productData && setstate(productData.data);
  }, [productData]);

  if (error) return <p>error</p>
  if (!productData && !state) return <Loading />;


  return (
    <ul>
      {state.products.map((product) => (
        <li key={product.id}> {product.title}</li>
      ))}
    </ul>
  );
}



export async function getStaticProps() {
  const response = await axios.get(
    "https://mars-ecommerce.se-pro.site/api/products/"
  );

  return { props: {product:response.data}};
}
