export default function List(props) {
    if(props.productsData) {
        return (
            <>
                {/* Lista de productos*/}
                <div className="container-xl">
                    <div className="table-responsive">
                        <div className="table-wrapper">
                            <div className="table-title">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h2>Productos en <b>Bertedeco</b></h2>
                                    </div>
                                </div>
                            </div>
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nombre</th>
                                        <th>Stock</th>
                                        <th>Categoria</th>
                                        <th>Detalle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.productsData.products.map((product) => (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.stock}</td>
                                        <td>{product.category}</td>
                                        <td><a target="_blank" rel="noreferrer" href={product.detail}>Link</a></td>
                                    </tr>
                                    ))} 
                                </tbody>
                            </table>
                        </div>
                    </div>        
                </div>
            </>
        )
    }
}
