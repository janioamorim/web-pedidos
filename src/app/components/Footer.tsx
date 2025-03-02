import Image from "next/image";

export default function Footer() {
    return (
      <footer className="bg-gray-100 shadow-md p-6 flex justify-between">
        <div className="flex justify-items-center items-center gap-4">
          <a href="#" className="text-xs font-normal text-color underline">Termos de Uso</a>
          <a href="#" className="text-xs font-normal text-color underline">Política de privacidade</a>
        </div>

        <div className="flex justify-items-center items-center gap-4">
          <Image
            src="/logo-azape.svg" 
            alt="Login Art" 
            width={24} 
            height={24}
            priority
            className="" />
          <span className="text-xs font-normal text-color">© Desenvolvido por Azape</span>
        </div>
      </footer>
    );
  }