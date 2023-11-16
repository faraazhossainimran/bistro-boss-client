

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
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
