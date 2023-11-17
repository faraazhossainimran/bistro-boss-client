

const FoodCard = ({item}) => {
    const {image, category, _id, price, recipe, name} = item
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
            <button className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100 border-orange-300">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
