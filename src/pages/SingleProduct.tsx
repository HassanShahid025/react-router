import { useParams, Link }  from 'react-router-dom'
import products from '../data'
export const SingleProduct = () => {
    const {productId} = useParams()
    const product = products.find((product) => product.id === productId)
    const { image, name } = product!
    return(
        <section className="section product">
            <img src={image}/>
            <h2>{name}</h2>
            <Link to='products'>back to products</Link>
            
        </section>
    )
}