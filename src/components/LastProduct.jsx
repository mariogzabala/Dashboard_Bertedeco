export default function LastProduct(props) {
    if(props.data) {
        const image = `https://bertedeco.herokuapp.com/img/productos/${props.data[0].images[0].name}`
        return (
            <>
                {/* Last Product in DB */}
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Ultimo producto agregado</h6>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{height: "100%"}} src={image} alt="product"></img>
                            </div>
                            <div className="text-xs font-weight-bold text-uppercase mb-1">
                                {props.data[0].name}
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.data[0].description}</div>
                            <a target="_blank" rel="noreferrer" href={props.data[0].detail}>Detalle de producto</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
