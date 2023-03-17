import { useParams } from 'react-router-dom'
const Edit = ({ products }) => {
    let id = parseFloat(useParams().id)

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    const product = products.find(product => product.id === id);

    if(!product) {
        return <p>There are no product corresponding.</p>
    }

    return (
        <>
            <h1>Edit product</h1>
            <form className='product-form'>
                <label>Product name</label>
                <input type="text" value={product.name} />
                <label>Description</label>
                <input type="text" value={product.description} />
                <label>Price</label>
                <input type="text" value={product.price} />
                <label>Category</label>
                <input type="text" value={product.category} />
                <button>Save</button>
            </form>
        </>
    )
}
export default Edit