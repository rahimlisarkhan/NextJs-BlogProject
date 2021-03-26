import Layout from "../components/layout/layout"
import ErrorAlert from "../components/ui/error-alert"


const NotFoundPage = () => {

    return (
        <Layout>
            <ErrorAlert>Page not found!</ErrorAlert>
        </Layout>
    )
}


export default NotFoundPage