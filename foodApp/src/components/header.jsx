import { useSelector } from "react-redux";
import {NavLink} from "react-router-dom";

const Header = () => {
   const cartItems=useSelector((store)=>{
     return store.cart.items
   })
  return (
    <div className="shadow-gray-400 shadow-lg sticky top-0 bg-white z-10 ">
      <div className="h-20 w-3/4 flex gap-20 md:justify-between items-center px-5 m-auto text-lg ">
          <div>
          LOGO
          </div>
          <div className="w-auto flex justify-around items-center gap-20 ">

             <NavLink to="/" className={({isActive})=>{
                return `${isActive?"text-orange-600":"text-slate-700"}`
             }}><div className="hover:text-gray-800">home</div></NavLink>
             <NavLink to="/search" className={({isActive})=>{
                return `${isActive?"text-orange-600":"text-slate-700"}`
             }}><div className="hover:text-gray-800">search</div></NavLink>
             <NavLink to="/about" className={({isActive})=>{
                return `${isActive?"text-orange-600":"text-slate-700"}`
             }}><div className="hover:text-gray-800">about us</div></NavLink>
             <NavLink to="/contact" className={({isActive})=>{
              return `${isActive?"text-orange-600":"text-slate-700"}`
             }}><div className="hover:text-gray-800">contact us</div></NavLink>
             <NavLink to="/profile" className={({isActive})=>{
              return `${isActive?"text-orange-600":"text-slate-700"}`
             }}><div className="hover:text-gray-800">profile</div></NavLink>
             <NavLink to="/cart" className={({isActive})=>{
                return `${isActive?"text-orange-600":"text-slate-700"}`
             }}><div className="hover:text-gray-800">Cart ({cartItems.length})</div></NavLink>
          </div>

      </div>
    </div>
  );
};
export default Header;
