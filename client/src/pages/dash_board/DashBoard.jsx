import Products from "../products/Products";
import "./DashBoard.css";

/* 
 # Home of the app
 # visible to logged in users
*/
const DashBoard = () => {
    return (
        <div>
            <Products />
        </div>
    )
}

export default DashBoard;