import { useDispatch } from "react-redux";
import Button from "./button";
import { cartActions } from "../store/cartSlice";
import cart from "../util/icons/icons8-carrito-de-compras-24.png"

const Card = ({ name, image, description, price, id }) => {
    const dispatch = useDispatch();
    const addItem = () => {
        dispatch(cartActions.addItemToCart({
            name,
            image,
            price,
            id
        }))
    }
    return (
        <div className="relative m-4 flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img src={image} alt="card-image" />
            </div>
            <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                    {name}
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                    {description}
                </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2">
                <Button onClick={addItem} type="button">
                   <span className="flex">Add+<img src={cart} alt="carrito"/></span>
                </Button>
                <Button classes="cardButton" type="button">
                    Read more
                </Button>
            </div>
        </div>
    );
}

export default Card;