import React from "react";
import { GiftShop } from "../../querries/giftshop/getgiftshops";
import { useCart } from "../../context/hook/UseCart"
import Image from "next/image";

interface ItemsListProps {
  items: GiftShop[] | undefined;
}

const ItemsList: React.FC<ItemsListProps> = ({ items }) => {
  const { addToCart, removeFromCart, getItemQuantity } = useCart(); // Get cart actions and quantity getter

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items?.map((item) => {
        const quantity = getItemQuantity(item.id); // Get current quantity

        return (
          <div key={item.id} className="border p-4 rounded-lg">
            <Image
            width={100}
            height={100}
              src={item.images[0]?.image.url}
              alt={item.title}
              className="w-full object-cover mb-2"
            />
            <h3 className="text-lg text-left font-bold">{item.title}</h3>
            <p className="text-sm text-left">{item.description}</p>
            <p className="text-lg text-left font-bold">Kes {item.amount}</p>

            {quantity > 0 ? (
              <div className="mt-2 flex items-center space-x-2">
                <button 
                  onClick={() => removeFromCart(item)} // Pass entire item
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  -
                </button>
                <span className="text-lg font-bold">{quantity}</span>
                <button 
                  onClick={() => addToCart(item)} 
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={() => addToCart(item)}
                className="mt-2 float-left bg-[#94723C] text-white px-4 py-2 rounded"
              >
                Add to Cart
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ItemsList;
