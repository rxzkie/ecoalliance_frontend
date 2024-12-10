import Image from "next/image";
import Link from "next/link";

import { TiArrowSortedDown } from "react-icons/ti";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { FaBloggerB } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

  

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
          
          <div className="flex">
            <a href=""> <SiGmail className="text-white"/></a>
            <a href=""> <FaWhatsapp className="text-white"/></a>
            <a href=""> <FaBloggerB className="text-white"/></a>
            <a href=""> <FaFacebookF className="text-white"/></a>
            <a href=""> <FaLinkedinIn className="text-white"/></a>
            <a href=""> <FaYoutube className="text-white"/></a>
          </div>
      </nav>

      <div className="bg-black text-white ml-52 mr-96  ">
              <div className="flex justify-around pt-10 pb-10">
                <div>
                  <h3>MULTIPROPÓSITO</h3>
                  <div className="flex items-center mt-4 mb-3">
                    <Image src="/navProductos/multiproposito.png" alt="Producto multipropósito" width={60} height={60} className="mr-3" />
                    <p>Multipropósito</p>
                  </div>
                  <div className="flex items-center mt-3 mb-5">
                    <Image src="/navProductos/camiones_multiproposito.png" alt="Producto camiones multipropósito" width={60} height={60} className="mr-3" />
                    <p>Camiones multipropósito</p>
                  </div>
                  <div className="flex items-center  mt-3 mb-3">
                    <Image src="/navProductos/accesorios_multiproposito.png" alt="Producto accesorios multipropósito" width={60} height={60} className="mr-3" />
                    <p>Accesorios multipropósito</p>
                  </div>

                  <h3 className="mt-5">ASEO URBANO</h3>
                  <div className="flex items-center mt-4 mb-3">
                    <Image src="/navProductos/barredora_de_calle.png" alt="Producto barredora de calle" width={60} height={60} className="mr-3" />
                    <p>Barredoras de calle</p>
                  </div>
                  <div className="flex items-center mt-3 mb-5">
                    <Image src="/navProductos/contenedores_campana.png" alt="Producto contenedor campana" width={60} height={60} className="mr-3" />
                    <p>Contenedores campana</p>
                  </div>
                  <div className="flex items-center mt-3">
                    <Image src="/navProductos/contenedores_metalicos.png" alt="Producto contenedor metálico" width={60} height={60} className="mr-3" />
                    <p>Contenedores metálicos</p>
                  </div>
                  
                </div>

                <div>
                  <h3>TRATAMIENTO DE RESIDUOS</h3>
                  <div className="flex items-center">
                    <Image src="/navProductos/chipeadoras.png" alt="Producto chipeadoras" width={60} height={60} className="mr-3" />
                    <p>Chipeadoras</p>
                  </div>
                  <div className="flex items-center">
                    <Image src="/navProductos/briquetadoras.png" alt="Producto briquetadoras" width={60} height={60} className="mr-3" />
                    <p>Briquetadoras</p>
                  </div>
                  <div className="flex items-center">
                    <Image src="/navProductos/trituradoras.png" alt="Producto trituradoras" width={60} height={60} className="mr-3" />
                    <p>Trituradoras</p>
                  </div>
                  <div className="flex items-center">
                    <Image src="/navProductos/cribas.png" alt="Producto cribas" width={60} height={60} className="mr-3" />
                    <p>Cribas</p>
                  </div>
                  <div className="flex items-center">
                    <Image src="/navProductos/compost.png" alt="compost" width={60} height={40} className="mr-3" />
                    <p>Compost</p>
                  </div>
                </div>

                <div>
                  <h3>MANTENIMIENTO URBANO</h3>
                  <div className="flex items-center">
                    <Image src="/navProductos/hidroelevadores.png" alt="Producto hidroelevadores" width={60} height={60} className="mr-3" />
                    <p>Hidroelevadores</p>
                  </div>
                  <div className="flex items-center">
                    <Image src="/navProductos/bacheadoras.png" alt="Producto bacheadoras" width={60} height={60} className="mr-3" />
                    <p>Bacheadoras</p>
                  </div>
                  <div className="flex items-center">
                    <Image src="/navProductos/demarcadores_de_calle.png" alt="Producto demarcadores de calle" width={60} height={60} className="mr-3" />
                    <p>Demarcadores de calle</p>
                  </div>
                  <div className="flex items-center">
                    <Image src="/navProductos/ampliroll.png" alt="Producto ampliroll" width={60} height={60} className="mr-3" />
                    <p>Ampliroll</p>
                  </div>
                  <h3>ESPACIOS PÚBLICOS</h3>
                  <div className="flex items-center">
                    <Image src="/navProductos/basureros_urbanos.png" alt="Producto basureros urbanos" width={60} height={60} className="mr-3" />
                    <p>Basureros urbanos</p>
                  </div>
                </div>
              </div>
      </div>
        
      
        </>
    )
}
