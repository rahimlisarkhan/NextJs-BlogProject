import {useRouter} from 'next/router'


let BlogPageSlug = () => {

    const router = useRouter()
    
    console.log(router);
    return(
        <div>
            <h1>
                Blog page for Slug
            </h1>
        </div>
    )
}

export default BlogPageSlug;