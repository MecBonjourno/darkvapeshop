import products from '../../productsfakes.json'
import { fromImageToUrl } from '../../utils/urls'

const product = products[0]

const Product = () => {
    return(
        <div>
            <h3>{product.name}</h3>
            <img src={fromImageToUrl(product.image)}/>
            <h3>{product.name}</h3>
            <p> $ {product.price}</p>

            <p>
                {product.content}
            </p>
        </div>
    )
}

export default Product;