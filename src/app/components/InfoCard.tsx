import Image from "next/image";
import { formatCurrency } from "../utils/utils";
import PlaceHolderTable from "./PlaceholderTable";
import PlaceHolderAmount from "./PlaceholderAmount";

interface InfoCardProps {
  icon: string;
  label: string;
  value?: number;
  amount: number;
}

export default function InfoCard({ icon, label, value, amount }: InfoCardProps) {
  return (
    <div className="flex flex-col w-1/3 items-start bg-white p-6 rounded-8 shadow-md flex-custom-card">
      <Image src={icon} alt={label} width={48} height={48} priority className="mb-4" />
      { amount === 0 ? 
        <PlaceHolderAmount /> : 
        <>
            <span className="text-md color-gray-100">
            {value !== undefined ? `${value} ${label}` : label}
            </span>
            <span className="text-md font-semibold color-gray-100">{formatCurrency(amount)}</span>
        </>
        
    }
      
    </div>
  );
}
