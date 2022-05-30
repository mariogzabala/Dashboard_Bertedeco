export default function Categories(props) {
    return (
        <>
            {/* Categories in DB */}
            <div className="col-lg-6 mb-4">						
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Productos por Categoria</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            { props.data &&
                                props.data.map((category, index) => (
                                    <div key={index} className="col-lg-6 mb-4">
                                        <div className="card bg-info text-white shadow">
                                            <div className="card-body">
                                                <div className="text-xs font-weight-bold text-uppercase mb-1">
                                                    {category.category}
                                                </div>
                                                <div className="h5 mb-0 font-weight-bold">{category.count}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            { !props.data &&
                                <div className="col-lg-12 mb-12">
                                    <div className="card bg-info text-white shadow">
                                        <div className="card-body">
                                            <div className="text-xs font-weight-bold text-uppercase mb-1">
                                                Cargando...
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
