
import Swal from "sweetalert2";
import useAuth from "../../pages/hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";



const FoodCard = ({item}) => {
    const {image, category, _id, price, recipe, name} = item
    const location = useLocation()
    const navigate = useNavigate()
    const {user} = useAuth()
    const addToCart = (food) => {

      if(user && user?.email){
        // TODO send cart item to the database
        console.log(food, user?.email);
        const cartItem = {
          menuId: _id, 
          email: user.email, 
          name,
          image, 
          price,
        }
        axios.post('http://localhost:5000/carts', cartItem)
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
            <button onClick={()=> addToCart(item)} className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100 border-orange-300">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
