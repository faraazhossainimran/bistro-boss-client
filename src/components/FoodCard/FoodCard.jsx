
import Swal from "sweetalert2";
import useAuth from "../../pages/hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../pages/hooks/useAxiosSecure";
import useCart from "../../pages/hooks/useCart";



const FoodCard = ({item}) => {
    const {image, category, _id, price, recipe, name} = item
    const location = useLocation()
    const navigate = useNavigate()
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const [, refetch]= useCart();
    const addToCart = () => {

      if(user && user?.email){
        // send cart item to the database
        const cartItem = {
          menuId: _id, 
          email: user.email, 
          name,
          image, 
          price,
        }
        axiosSecure.post('/carts', cartItem)
        .then( res => {
          console.log(res.data);
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to the cart`,
              showConfirmButton: false,
              timer: 1500
            });
            // refetch cart to update the cart items count
            refetch()
          }
        })
      } 
      else{
        Swal.fire({
          title: "You are not logged In?",
          text: "Please login to add to the cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login!"
        }).then((result) => {
          if (result.isConfirmed) {
              navigate('/login', {state: {from: location}})
          }
        });
      }
    }
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <p className="absolute bg-black p-3 right-5 top-4 text-white">${price}</p>
        <figure>
          <img
            src={image}
            alt={name}
          />
        </figure>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions ">
            <button onClick={addToCart} className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100 border-orange-300">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
