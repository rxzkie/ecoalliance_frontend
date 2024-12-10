import Image from "next/image";

import { GoArrowRight } from "react-icons/go";




export default function Home() {
  return (
    <>
    
      <main className="w-screen">

            <section className="flex justify-around mt-16 pr-24 pl-24 ">
              <div className="w-1/2">
                <h1 className="text-3xl text-start">Avanzamos con un propósito: <br/> dejar un impacto positivo y <br/>duradero en el planeta.</h1>
                <p className="text-start text-xl font-extralight mt-20">EcoAlliance ofrece soluciones tecnológicas sostenibles en saneamiento urbano y rural, tratamiento de residuos, aseo  urbano, gestion urbana, espacios públicos y electromovilidad, impulsando un futuro más sostenible.</p>

                <div className="flex justify-center mt-20">
                <button className="bg-[#BA1D1D] text-white py-2 px-8 rounded-3xl mr-5">Acerca de EAX</button>
                <button className="py-2 px-8 rounded-3xl border-black border-2 ml-5 flex items-center">Contáctanos <GoArrowRight className="ml-3"/></button>
              </div>
              </div>
              <div className="w-1/3 flex justify-center">
                	
                    <Image src="/imgHome/compostera.png"  width={400} height={400} alt="Compostera"/>
              </div>
              
            </section>

            <section className="flex mt-16">
              <div className="w-1/2 bg-[#F5F5F5] contenedor-section3 h-200">
                <p>Contenido</p>
              </div>

              <div className="w-1/2 bg-[#1E1E1E] h-200">
                <p>Contenido</p>
              </div>
            </section>

            <section >
              <Image src="/imgHome/creatividad-respeto.png" width={1920} height={868}  alt="Respeto y Creatividad"/>
            </section>

            <section className="mt-15 flex justify-between mt-36 pr-24 pl-24 mb-24">
              <div className="w-1/2">
                <h2 className="text-3xl text-start">Lo que hace EcoAlliance <br/> puede hacer por ti</h2>
              </div>
              <div className="w-1/2">
                En EcoAlliance, ofrecemos un servicio integral para garantizar la eficiencia y sostenibilidad de tus operaciones. Desde el montaje de equipos hasta el suministro de repuestos originales y un completo servicio postventa, trabajamos para asegurar la continuidad operativa y el máximo rendimiento de tus equipos, respaldando cada etapa de tu gestión ambiental.
                <div className="flex items-center mt-7 border border-black p-1 rounded-full w-28">
                  <button className="flex items-center ml-2">Servicios <GoArrowRight className="ml-1 text-xl"/> </button>
                  
                </div>
              </div>
            </section>

            <section className="pr-24 pl-24 mb-24 flex justify-center">

              <div className="bg-black mr-5 pt-10 pb-10 rounded-2xl">
                <div className="flex justify-center mb-8">
                  <Image src="/imgHome/servicio-de-reparacion.png" width={80} height={80} alt="Servicio de reparacion"/>
                </div>
                <h2 className="text-white text-center text-2xl mb-8">ServicioPostVenta</h2>
                <p className="text-white text-center pl-10 pr-10">Brindamos asistencia completa para mantener tus equipos en óptimo funcionamiento, con capacitación, mantenimiento en terreno, reparaciones y soporte técnico especializado.</p>
              </div>

              <div className="bg-black pt-10 pb-10 rounded-2xl">
                <div className="flex justify-center mb-8">
                  <Image src="/imgHome/brazo-robotico.png" width={80} height={80} alt="Servicio de reparacion" />
                </div>
                <h2 className="text-white text-center text-2xl mb-8">Montaje de equipos</h2>
                <p className="text-white text-center pl-10 pr-10">Realizamos el montaje y la puesta en marcha de maquinaria para saneamiento y tratamiento de residuos, garantizando alta confiabilidad y eficiencia en cada instalación.</p>
              </div>

              <div className="bg-black ml-5 pt-10 pb-10 rounded-2xl">
                <div className="flex justify-center mb-8">
                  <Image src="/imgHome/ajustes-de-engranajes.png" width={80} height={80} alt="Servicio de reparacion" />
                </div>
                <h2 className="text-white text-center text-2xl mb-8">Insumos y repuestos</h2>
                <p className="text-white text-center pl-10 pr-10">Ofrecemos un amplio stock de repuestos originales, como cuchillas, filtros y componentes hidráulicos. Con despacho a cualquier parte de Chile para asegurar tu operación continua.</p>
              </div>

            </section>

            <section className="pr-24 pl-24 mb-10 ">
              <h2 className="text-center text-3xl mb-10">Soluciones que impulsan un cambio <br/> transformador en el medio ambiente</h2>
            
              <div className="flex  ">
                <div className="bg-[#F5F5F5]  pt-16 pl-16 pr-24 rounded-tl-2xl rounded-bl-2xl">
                  <h3 className="text-2xl text-start pb-10">Soluciones que <br/> marcan la diferencia</h3>
                  <p>En EcoAlliance, reinventamos la forma en que las comunidades abordan los desafíos ambientales. Nuestras soluciones avanzadas combinan tecnología de punta con un enfoque sostenible, ofreciendo desde sistemas de saneamiento inteligentes hasta estrategias efectivas de gestión de residuos y electromovilidad.</p>
                  <div className="flex mt-10 items-center border border-black p-2 rounded-full w-72">
                    <button className="ml-5 flex">
                      Conoce nuestras soluciones 
                      <div className=" bg-black p-1 ml-5 rounded-full">
                        <GoArrowRight className="text-white "/>
                      </div>
                    </button>
                    
                  </div>
                </div>
                <div>
                  <Image src="/imgHome/img-soluciones.png" width={4500} height={1500} alt="Maquinaria sustentable" />
                </div>
              </div>
            </section>

            
      </main>
    </>
  );
}

