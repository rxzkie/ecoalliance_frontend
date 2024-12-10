import Image from "next/image"

const ServiciosPage = () =>{
    return(
        <>
            <main>
                <section className="contenedor-servicios-section1">
                <p className="z-10 absolute text-white pl-36 bottom-40">Potenciando tu operación con confianza</p>
                <p className="z-10 absolute mt-8 text-white text-3xl pl-36 bottom-20">MONTAJE, MANTENIMIENTO <br/> Y RESPALDO TOTAL</p>
                    <Image src="/imgServicios/img-principal.png" alt="Imagen principal" width={2000} height={200} className="relative"/>
                  
                </section>
                
                <section className="flex pr-24 pl-24 mt-28 mb-28 items-center">
                    <div>
                        <h1 className="text-3xl">Confiabilidad, Innovación y Respaldo Técnico para un Futuro Sustentable</h1>
                    </div>
                    <div>
                        <p>Nuestro compromiso es brindar soluciones técnicas confiables y un servicio postventa sólido, asegurando la continuidad operativa de cada proyecto. Con un equipo profesional altamente capacitado, ofrecemos un respaldo técnico integral que incluye montaje especializado, soporte en terreno, y repuestos 100% originales.</p>
                    </div>
                </section>

                <section className="flex pr-24 pl-24 mb-24">
                    <div className="flex items-center border-b border-l border-r mr-2 shadow-md rounded-xl">
                        <div className=" ml-4 mr-4">
                            <Image src="/imgServicios/automovil.png" alt="Imagen principal" width={150} height={150} className="relative"/>
                        </div>
                        <div>
                            <h3 className="font-bold">Montaje Especializado</h3>
                            <p className="text-sm">Realizamos un montaje preciso para que cada equipo esté operativo desde el primer día, maximizando su rendimiento.</p>
                        </div>
                    </div>

                    <div className="flex items-center border-b border-l border-r mr-1 shadow-md rounded-xl">
                        <div className=" ml-4 mr-4">
                            <Image src="/imgServicios/perno.png" alt="Imagen principal" width={150} height={150} className="relative"/>
                        </div>
                        <div>
                            <h3 className=" font-bold">Repuestos 100% Originales</h3>
                            <p className="text-sm">Realizamos un montaje preciso para que cada equipo esté operativo desde el primer día, maximizando su rendimiento.</p>
                        </div>
                    </div>

                    <div className="flex items-center border-b border-l border-r ml-1 shadow-md rounded-xl">
                        <div className=" ml-4 mr-4">
                            <Image src="/imgServicios/tiempo.png" alt="Imagen principal" width={150} height={150} className="relative"/>
                        </div>
                        <div>
                            <h3 className="font-bold">Montaje Especializado</h3>
                            <p className="text-sm">Realizamos un montaje preciso para que cada equipo esté operativo desde el primer día, maximizando su rendimiento.</p>
                        </div>
                    </div>

                    <div className="flex items-center border-b border-l border-r  ml-2 shadow-md rounded-xl">
                        <div className=" ml-4 mr-4">
                            <Image src="/imgServicios/capacitacion.png" alt="Imagen principal" width={150} height={150} className="relative"/>
                        </div>
                        <div>
                            <h3 className="font-bold">Montaje Especializado</h3>
                            <p className="text-sm">Realizamos un montaje preciso para que cada equipo esté operativo desde el primer día, maximizando su rendimiento.</p>
                        </div>
                    </div>
                </section>


                <section className="mb-20">
                    <div className="flex">
                        <div className="w-1/2">
                            <Image src="/imgServicios/img-montaje.png" alt="Montaje de equipos" width={1000} height={1000} className="w-full"/>
                        </div>

                        <div className="w-1/2 bg-[#F6F6F6] ">
                            <p className="text-end pr-32 pt-20 text-2xl font-bold">01</p>
                            <div className="pl-24 pr-52 pt-40">
                                <h2 className="text-3xl font-bold mb-8">Montaje de equipos</h2>
                                <p className="mb-5">Tenemos la capacidad para realizar el completo montaje y puesta en marcha de equipos y máquinas especiales.</p>
                                <p>Equipos y maquinarias dedicadas a al aseo urbano y tratamiento de residuos son nuestra especialidad.</p>
                                <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl">Solicitar servicio</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="w-1/2 bg-[#F6F6F6] ">
                            <p className="text-start pl-32 pt-20  text-2xl font-bold">02</p>
                            <div className="pr-24 pl-52 pt-14">
                                <h2 className="text-3xl font-bold mb-8">Servicio postventa</h2>
                                <p className="mb-5">Entregamos máxima confiabilidad, disponibilidad y continuidad operativa gracias a la Innovación y el conocimiento técnico de nuestro equipo profesional, para dar un permanente soporte y respaldo técnico.</p>
                                <ul>
                                    <li>• Servicios de puesta en marcha de equipos nuevos.</li>
                                    <li>• Capacitación técnica de operadores.</li>
                                    <li>• Servicio Técnico para equipos y componentes.</li>
                                    <li>• Servicios en Terreno para mantención, reparación y emergencias.</li>
                                    <li>• Asistencia Telefónica.</li>
                                </ul>
                                <p className="mt-5">Todos los servicios son realizados por personal especializado y con repuestos 100% originales.</p>
                                <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl">Ver productos</button>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <Image src="/imgServicios/img-post-venta.png" alt="Servicio Post Venta" width={1000} height={1000} className="w-full"/>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="w-1/2">
                            <Image src="/imgServicios/img-insumos.png" alt="Insumos y repuestos" width={1000} height={1000} className="w-full"/>
                        </div>

                        <div className="w-1/2 bg-[#F6F6F6] ">
                            <p className="text-end pr-32 pt-20 text-2xl font-bold">03</p>
                            <div className="pl-24 pr-52 pt-40">
                                <h2 className="text-3xl font-bold mb-8">Insumos y repuestos</h2>
                                <p className="mb-5">La calidad y disponibilidad de los insumos y repuestos marcan diferencia. Disponibilidad de stock de insumos y repuestos originales para todas nuestras marcas.</p>
                                <p>Insumos y repuestos de alta rotación como cuchillos para chipeadoras, cepillos de barrido, filtros, embragues e insumos hidráulicos, entre los principales.
                                Despacho a cualquier parte de Chile o retiro directamente en nuestras oficinas.</p>
                                <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl">Solicitar servicio</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className=" pr-24 pl-24 bg-[#262729]">
                    
                </section>
            </main>
        </>
    )
}

export default ServiciosPage