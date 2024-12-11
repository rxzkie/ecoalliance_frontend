import Image from "next/image";
import Link from "next/link";

import { TiArrowSortedDown } from "react-icons/ti";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { FaBloggerB } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import SubNavegacionProductos from "./SubNavegacionProductos";
import SubNavegacionSoluciones from "./SubNavegacionSoluciones";
import ModalCarrito from "../carrito/ModalCarrito";

  

export const Navbar = ()=> {

    const navLinks = [
        {"nombre":"INICIO","url":"/","logo":''},
        {"nombre":"PRODUCTOS","url":"/productos","logo":<TiArrowSortedDown className="text-white mt-1"/>},
        {"nombre":"SOLUCIONES","url":"/soluciones","logo":<TiArrowSortedDown className="text-white mt-1"/>},
        {"nombre":"SERVICIOS","url":"/servicios","logo":""},
        {"nombre":"ACERCA DE EAX","url":"/acerca-de-eax","logo":""},
        {"nombre":"CONTACTO","url":"/contacto","logo":""},
      ]

    return(
        <>
        <nav className="navbar flex justify-around">
        <Image src="/LOGO-EAX.png" alt="Logotipo EAX" width={50} height={50}/>
          <ul className="flex">
            
            {navLinks.map(links=>(
              <>
                <li className="flex">
                  <Link href={links.url} className="nav-item">{links.nombre}</Link>
                  {links.logo !== '' && links.logo } 
                </li>
              </>
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
          
          <div className="flex items-center">
            <a href="" className="mr-2"> <SiGmail className="text-white"/></a>
            <a href="" className="mr-2"> <FaWhatsapp className="text-white"/></a>
            <a href="" className="mr-2"> <FaBloggerB className="text-white"/></a>
            <a href="" className="mr-2"> <FaFacebookF className="text-white"/></a>
            <a href="" className="mr-2"> <FaLinkedinIn className="text-white"/></a>
            <a href="" className="mr-2"> <FaYoutube className="text-white"/></a>
          </div>
      </nav>  
      <ModalCarrito/>
      <SubNavegacionProductos/>
      <SubNavegacionSoluciones/>

      
        
      
        </>
    )
}
