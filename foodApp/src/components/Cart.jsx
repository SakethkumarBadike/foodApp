import { useDispatch, useSelector } from "react-redux";
import ResMenuItems from "./ResMenuItems";
import { clearCart } from "../utils/cart.slice";

const Cart=()=>{
    const items=useSelector((store)=>store.cart.items)
    const dispatch=useDispatch();
    const handler=()=>{
           dispatch(clearCart());
    }
    return(
        <div className=" w-3/4 m-auto">
            <div className="flex w-full justify-between items-center  ">
            <h1 className="my-5 font-bold text-3xl text-center w-10/12">Cart</h1>
            <button className="bg-red-500 text-white rounded-lg h-1/2 px-4 py-2" onClick={handler}>Clear Cart</button>
            </div>
          { items.length!=0?<ResMenuItems data={items}/>:<div className="flex w-3/4 m-auto h-full items-center justify-center"><h1 className="font-medium text-xl">Cart is Empty ! </h1></div>}

        </div>
    )

}
export default Cart;