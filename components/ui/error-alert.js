

const ErrorAlert = (props) => {
    
    return (
        <section className='error-section'>
            <p>{props.children}</p>
        </section>
    )
}


export default ErrorAlert