import Image from "next/image";
import { getWhatsAppLink } from "@/lib/whatsapp";

type MenuCardProps = {
  name: string;
  price: string;
  image: string;
};

export function MenuCard({ name, price, image }: MenuCardProps) {
  return (
    <div className="group flex flex-col h-full rounded-2xl overflow-hidden border border-line bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="relative w-full aspect-square">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 768px) 33vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-ink text-lg">{name}</h3>
        <p className="text-primary font-semibold mt-1 mb-auto">{price}</p>
        <a
        href={getWhatsAppLink(`Hi! I'd like to order: ${name} (${price})`)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block w-full text-center bg-primary text-white py-2 rounded-full text-sm font-semibold"
>
        Order
      </a>
    </div>
    </div >
  );
}