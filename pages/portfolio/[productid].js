import {useRouter} from 'next/router'



let ProductPageId = () => {

    let router = useRouter() // request for backend get id


    return(
        <div>
            <h1>
                ProductPage get id
            </h1>
        </div>
    )
}


export default ProductPageId