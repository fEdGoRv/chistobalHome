import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Button from "./button";
import { cartActions } from "../store/cartSlice";

const ItemDetails = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const product = useSelector(state => state.modal.product);

  useEffect(()=>{
    setLoading(false);
  },[product])
    
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not ready</p>;
  }
  
  const addItem = () => {
    dispatch(
      cartActions.addItemToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      }),
    );
  };
  return (
    <div className=" m-6 max-w-lg mx-auto bg-white">
      <img
        className="w-full h-96 object-cover"
        src={`/pinchos/${product.image}`}
        alt={product.name}
      />
      <div className="p-6 ">
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-semibold text-green-600 mb-4">
          ${product.price}
        </p>
        <Button onClick={addItem}>Añadir al carrito</Button>
      </div>
    </div>
  );
};

export default ItemDetails;
