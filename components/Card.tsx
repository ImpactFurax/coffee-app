import { ProductsTypes } from "@/app/types/productsType";
import { ToastContainer, toast } from "react-toastify";
import { GiWorld } from "react-icons/gi";
import { PiCoffeeBeanFill } from "react-icons/pi";
import { RiRedPacketFill } from "react-icons/ri";
import { useProductsContext } from "@/app/context/CartContext";

interface CardProps {
  item: ProductsTypes
}

const Card: React.FC<CardProps> = ({ item }) => {

  const { addToCart } = useProductsContext();

  const handleAddToCart = () => {
    addToCart(item);
    toast.success(`x1 ${item.name} ajouté à votre panier`)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 relative z-50 flex flex-col justify-between gap-2">
      <img
        src={item.image}
        alt={item.name}
        className="mb-4 object-cover w-full"
      />
      <p className="text-[12px] text-gray-900 flex items-center gap-2">
        <span className="font-bold flex items-center gap-1"><RiRedPacketFill /><span className="">Quantité:</span></span>
        <span>Packet de {item.quantityPack}g</span>
      </p>
      <p className="text-[12px] text-gray-900 flex items-center gap-2">
        <span className="font-bold flex items-center gap-1"><GiWorld /><span className="">Origine:</span></span>
        <span>{item.country}g</span>
      </p>
      <p className="text-[12px] text-gray-900 flex items-center gap-2">
        <span className="font-bold flex items-center gap-1"><PiCoffeeBeanFill /><span className="">Puissance:</span></span>
        <span>Packet de {item.strength}g</span>
      </p>
      <p className="text-sm text-gray-400">{item.desc}</p>
      <p className="bg-orange-400 text-white font-bold mt-2 absolute top-2 right-2 p-4 rounded-full">{item.price}€</p>

      <button onClick={handleAddToCart} className="self-end w-full sm:w-fit bg-orange-400 hover:bg-orange-600 rounded-md text-white py-2 px-4 mt-4">Ajouter au panier</button>
    </div>
  )
}

export default Card