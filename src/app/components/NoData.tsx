import Image from "next/image";

export default function NoData() {
    return (
      <div className="p-6 w-full flex-col justify-items-center">
        <span className="text-lg font-normal text-color">
          Nenhum registro encontrado
        </span>
        <div className="flex justify-items-center items-center">
          <Image
            src="/folder-open.svg" 
            alt="Login Art" 
            width={250} 
            height={200}
            priority
            className="" />
        </div>
      </div>
    );
  }