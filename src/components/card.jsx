import { useDispatch, useSelector } from "react-redux";
import { useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom"
 
import lupa from '../util/icons/lupa.svg'
import Button from "./button";
import { cartActions } from "../store/cartSlice";
import { cardCategoriesActions } from "../store/cardCategoriesSlice";
import buble from "../util/icons/buble.svg"
import { modalActions } from "../store/modalSlice";


const Card = ({ name, image, price, id: prodId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cardRef = useRef(null);
  const addItem = useCallback((event) => {
    event.stopPropagation();
    dispatch(
      cartActions.addItemToCart({
        name,
        image,
        price,
        id: prodId,
      }),
    );
  }, [dispatch, name, image, price, prodId]);

  const showDetails = useCallback((event) => {
    event.stopPropagation();
    const cardRect = cardRef.current.getBoundingClientRect();
    const position = {
      x: cardRect.x,
      y: cardRect.y,
      width: cardRect.width,
      height: cardRect.height
    }
    dispatch(modalActions.openDetailModal({ prod: prodId, position: position }))
  }, [dispatch, prodId]);

  const handleDetailPage = () => {
    navigate(`/${prodId}`);
  }

  const animation = useSelector((state) => state.cardCategories.animation);
  const active = useSelector((state) => state.cardCategories.active);
  const activeB = useSelector((state) => state.cardCategories.activeB)
  const hiddenStyle = "opacity-0 pointer-events-none translate-y-60";
  const visibleStyle = "opacity-1 translate-y-44";

  return (
    <div
      className="min-h-72 overflow-hidden"
      onMouseOver={() => {
        dispatch(cardCategoriesActions.handleAnimation(prodId))
      }}
      onMouseLeave={() => {
        dispatch(cardCategoriesActions.handleAnimation(""))
      }}
      onClick={handleDetailPage}
    >
      <div
        className="relative w-64 h-full m-4 p-4 bg-cover bg-center"
        ref={cardRef}
        style={{ backgroundImage: `url(/pinchos/${image})` }}
      >
        <div className={`w-24 transform transition-all duration-700 ${animation === prodId && activeB ? " opacity-1 translate-y-24 translate-x-24" : "opacity-0 translate-y-32 translate-x-24 "}`}>
          <img className="absolute" src={buble} alt="buble" />
          <p className="absolute top-2 left-2 text-white ">Añadir al Carrito</p>
        </div>
        <div className={`w-24 transform transition-all duration-700 ${animation === prodId && active ? " opacity-1 translate-y-24 translate-x-2" : "opacity-0 translate-y-32 translate-x-2"}`}>
          <img className="absolute" src={buble} alt="buble" />
          <p className="absolute top-2 left-2 text-white">Vista Rápida</p>
        </div>
        <div className="flex px-4 pb-4 pt-0 mt-2">
          <div className={`transform transition-all duration-700 ${animation === prodId ? visibleStyle : hiddenStyle
            } `}
            onMouseEnter={() => dispatch(cardCategoriesActions.handleActive(true))}
            onMouseLeave={() => dispatch(cardCategoriesActions.handleActive(false))}
          >
            <Button onClick={showDetails} classes="white" type="button">
              <img className="max-w-8" src={lupa} alt="lupa" />
            </Button>
          </div>
          <div
            className={`transform transition-all duration-500 ${animation === prodId ? visibleStyle : hiddenStyle
              } `}
            onMouseEnter={() => dispatch(cardCategoriesActions.handleActiveB(true))}
            onMouseLeave={() => dispatch(cardCategoriesActions.handleActiveB(false))}
          >
            <Button classes="white" onClick={addItem} type="button">
              AÑADIR AL CARRITO
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
