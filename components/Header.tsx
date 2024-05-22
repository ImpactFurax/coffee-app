import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <header className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="size-full bg-black bg-opacity-50 flex items-center justify-center flex-col">
        <h1 className="text-white font-bold text-4xl md:text-6xl lg:text-8xl">COFFEE <span className="text-[#f9bd93]">SHOP</span>
        </h1>
        <p className="text-white font-bold m-2 text-center text-xs md:text-sm lg:text-base">
          Éveillez vos sens avec nos arômes exquis : Le café qui réveille les passions
        </p>
        <Link href="#produits" className="text-white text-4xl cursor-pointer hover:scale-110 hover:text-[#f9bd93] transition-all">
          <MdKeyboardArrowDown />
        </Link>
      </div>
    </header>
  )
}

export default Header