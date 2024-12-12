import Image from "next/image"

const Productos = [
    {"imagen":"/imgProductos/imgSubproductos/chipeadora/chipeadora_disco/A530L-1.png","alt":"Chipeadora A530 L","nombre":"A530 L","descripcion_tecnica":"23.8 HP k - Chasis 80 km/h","descripcion_producto":"Es compacta, potente y tritura troncos y ramas fácilmente. Tiene rodillos de alimentación hidráulicos y un cañón de descarga 360º."},

    {"imagen":"/imgProductos/imgSubproductos/chipeadora/chipeadora_disco/A530L-2.png","alt":"Chipeadora A530 L","nombre":"A530 L","descripcion_tecnica":"23 HP V - Chasis 80 km/h","descripcion_producto":"Es compacta, potente y tritura troncos y ramas fácilmente. Tiene rodillos de alimentación hidráulicos y un cañón de descarga 360º."},

    {"imagen":"/imgProductos/imgSubproductos/chipeadora/chipeadora_disco/A540.png","alt":"Chipeadora A540","nombre":"A540","descripcion_tecnica":"25 HP K - Chasis 80 km/h","descripcion_producto":"Es compacta, potente y tritura troncos y ramas fácilmente. Tiene rodillos de alimentación hidráulicos y un cañón de descarga 360º. "},

    {"imagen":"/imgProductos/imgSubproductos/chipeadora/chipeadora_disco/A550.png","alt":"Chipeadora A550","nombre":"A550","descripcion_tecnica":"37 HP Y - Chasis 80 km/h","descripcion_producto":"Es compacta, potente y tritura troncos y ramas fácilmente. Tiene rodillos de alimentación hidráulicos y un cañón de descarga 360º."},

    {"imagen":"/imgProductos/imgSubproductos/chipeadora/chipeadora_disco/A450.png","alt":"Chipeadora A450 L","nombre":"A450","descripcion_tecnica":"23.8 HP K - Chasis 80 km/h","descripcion_producto":"Es compacta, potente y tritura troncos y ramas fácilmente. Tiene rodillos de alimentación hidráulicos y un cañón de descarga 360º."},

    {"imagen":"/imgProductos/imgSubproductos/chipeadora/chipeadora_disco/A425.png","alt":"Chipeadora A425","nombre":"A425 L","descripcion_tecnica":"23 HP V - Chasis 80 km/h","descripcion_producto":"Es compacta, potente y tritura troncos y ramas fácilmente. Tiene rodillos de alimentación hidráulicos y un cañón de descarga 360º."},

    {"imagen":"/imgProductos/imgSubproductos/chipeadora/chipeadora_disco/A350.png","alt":"Chipeadora A350","nombre":"A350","descripcion_tecnica":"25 HP K - Chasis 80 km/h","descripcion_producto":"Es compacta, potente y tritura troncos y ramas fácilmente. Tiene rodillos de alimentación hidráulicos y un cañón de descarga 360º."},

    {"imagen":"/imgProductos/imgSubproductos/chipeadora/chipeadora_disco/A328.png","alt":"Chipeadora A328","nombre":"A328","descripcion_tecnica":"37 HP Y - Chasis 80 km/h","descripcion_producto":"Es compacta, potente y tritura troncos y ramas fácilmente. Tiene rodillos de alimentación hidráulicos y un cañón de descarga 360º."},
]


const InformacionProducto = () =>{


    return(
        <>
            <main>
                <div className="bg-[#F4F4F4]">
                    <section> 
                        <Image src="/imgProductos/imgSubproductos/chipeadora/chipeadora_disco/chipeadora_disco_principal.png" alt="Imagen Principal chipeadora de discos " width={1600} height={200} />
                    </section>


                    <section  className="pr-24 pl-24 mt-10">
                        <div className="flex justify-between">
                            <button>Filtrar</button>
                            <h1 className="text-3xl">Chipeadoras de disco</h1>
                            <p>8 productos en total</p>
                        </div>

                    </section>

                    <section className="pr-24 pl-24 mt-10 flex justify-center flex-wrap">
                        {Productos.map(producto=>(
                            <div className="border mx-2 rounded-2xl shadow-lg mb-5 w-72 pt-5 pb-20 px-5">
                                <div className="flex justify-center">
                                    <Image src={producto.imagen} alt={producto.alt} width={200} height={200} />
                                </div>
                                <p className="text-center text-sm mt-4">Chipeadora</p>
                                <h2 className="text-center text-xl font-bold">{producto.nombre}</h2>
                                <p className="text-center">{producto.descripcion_tecnica}</p>
                                <p className="text-center">{producto.descripcion_producto}</p>
                            </div>
                        ))} 

                    </section>
                </div>
            </main>
        </>
    )
}

export default InformacionProducto