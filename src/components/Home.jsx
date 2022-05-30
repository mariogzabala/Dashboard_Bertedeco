import Products from "./Products"
import Users from "./Users"
import LastProduct from "./LastProduct"
import Categories from "./Categories"

export default function Home(props) {
    return (
        <>
            {/* Home */}
            <div className="container-fluid">
                {/* Page Heading */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Bertedeco Dashboard</h1>
                </div>
                {/* Content Row */}
                <div className="row">
                    {props.productsData ? <Products count={props.productsData.count}/> : <Products count={"Cargando..."}/>}
                    {props.usersData ? <Users count={props.usersData.count}/> : <Users count={"Cargando..."}/>}
                </div>
                {/* Content Row */}
                <div className="row">
                    {props.productsData ? <LastProduct data={props.productsData.products.slice(-1)}/> : <LastProduct data={false}/>}
                    {props.productsData ? <Categories data={props.productsData.categories}/> : <Products data={false}/>}
                </div>
            </div>
        </>  
    )
}
