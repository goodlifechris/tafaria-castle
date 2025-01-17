// app/components/ItemsList.tsx
import React from 'react';
import { GiftShop } from '../../querries/giftshop/getgiftshops';

interface ItemsListProps {
  items: GiftShop[] | undefined;
  addToCart: (item: GiftShop) => void;
}

const ItemsList: React.FC<ItemsListProps> = ({ items, addToCart }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items?.map((item) => (
        <div key={item.id} className="border p-4 rounded-lg">
          <img src={item.images[0].image.url} alt={item.title} className="w-full object-cover mb-2" />
          <h3 className="text-lg text-left font-bold">{item.title}</h3>
          <p className="text-sm text-left">{item.description}</p>
          <p className="text-lg text-left font-bold">Kes {item.amount}</p>
          <button
            onClick={() => addToCart(item)}
            className="mt-2 float-left bg-[#94723C] text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
