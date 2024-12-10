import Image from "next/image"


export const Footer = () =>{
    return(
        <footer className="bg-[#1E1E1E] pb-16 pt-16 ">
            <div className="flex pb-20">

            
                <div className="text-[#D9D9D9]">
                    <h3>Enlaces</h3>
                    <nav>
                        <li>Inicio</li>
                        <li>Soluciones</li>
                        <li>Productos</li>
                        <li>Acerca de EAX</li>
                        <li>Blog</li>
                        <li>Tienda</li>
                    </nav>
                </div>

                <div className="text-[#D9D9D9]">
                    <h3>Contáctanos</h3>
                    <p>Casa central: 1/2 oriente 831, oficina 408, <br />Viña del mar, Chile</p>
                    <p>+56-32-269-0691</p>
                    <p>Ventas@ecoalliance.cl</p>
                    <p>+56-32-269-061</p>
                </div>

                <div className="text-[#D9D9D9]">
                    <p>Oficina europea: Charlotenburg 1407, Berlín, Alemania</p>
                    <p>+49(0) 3056597754</p>
                </div>
            </div>

            <div className="flex mb-10 items-center">
                <p className="text-[#D9D9D9]">Síguenos en</p>
                <div className="flex">
                    <Image width={28} height={28} className="w-7 h-7" src="/footer/logo_wsp.png" alt="Logo whatsApp" />
                    <Image width={28} height={28} className="w-7 h-7" src="/footer/logo_gmail.png" alt="Logo whatsApp" />
                    <Image width={28} height={28} className="w-7 h-7" src="/footer/logo_fb.png" alt="Logo whatsApp" />
                    <Image width={28} height={28} className="w-7 h-7" src="/footer/logo_youtube.png" alt="Logo whatsApp" />
                    <Image width={28} height={28} className="w-7 h-7" src="/footer/logo_blog.png" alt="Logo whatsApp" />
                    <Image width={28} height={28} className="w-7 h-7" src="/footer/logo_linkedin.png" alt="Logo whatsApp" />
                    <Image width={28} height={28} className="w-7 h-7" src="/footer/logo_instagram.png" alt="Logo whatsApp" />
                </div>
                <div>
                    <Image width={346} height={40} src="/footer/logo_objetivos_sustentables.png" alt="Logo whatsApp" />
                </div>
                <div className="flex items-end">
                    <Image width={73} height={63} src="/footer/logo_desafio10x.png"  alt="Logo whatsApp"/>
                    <p className="text-[#D9D9D9]">EcoAlliance participa en Desafío 10X</p>
                </div>
            </div>
           
           <div className="border border-white"></div>
            
        </footer>
    )
}