import Image from "next/image";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { FaBloggerB } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const navLinks = [
  {"nombre":"INICIO","url":"/"},
  {"nombre":"PRODUCTOS","url":"/productos","logo":''},
  {"nombre":"SOLUCIONES","url":"/soluciones","logo":''},
  {"nombre":"SERVICIOS","url":"/servicios","logo":""},
  {"nombre":"ACERCA DE EAX","url":"/acerca-de-eax","logo":""},
  {"nombre":"CONTACTO","url":"/contacto","logo":""},
]

export default function Home() {
  return (
    <nav className="navbar flex justify-around">
      <Image src="/LOGO-EAX.png" alt="Logotipo EAX" width={50} height={50}/>
      <ul className="flex">
        
        {navLinks.map(links=>(
        <p className="nav-item">{links.nombre}</p>
        ))}
      </ul>
  
      <Image src="/carrito.svg" alt="Logo Carrito de compra" width={20} height={20}/>

      <div className="mi-cuenta-contenedor flex pr-3 pl-3">
        <Image src="/user.svg" alt="Logo usuario" width={13} height={13} />
        <div className="flex">
          <p className="nav-item mr-3">Mi cuenta</p>
          <Image src="/flecha-abajo.svg" alt="Logo flecha" width={13} height={13} />
        </div>

      </div>
      <div className="flex">
        <a href=""> <SiGmail className="text-white"/></a>
        <a href=""> <FaWhatsapp className="text-white"/></a>
        <a href=""> <FaBloggerB className="text-white"/></a>
        <a href=""> <FaFacebookF className="text-white"/></a>
        <a href=""> <FaLinkedinIn className="text-white"/></a>
        <a href=""> <FaYoutube className="text-white"/></a>
     
      </div>
    </nav>
  );
}
