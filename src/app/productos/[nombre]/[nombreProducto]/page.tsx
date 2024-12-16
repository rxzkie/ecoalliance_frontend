import ProductosRelacionados from "@/components/ProductosRelacionados";
import Image from "next/image";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { GoArrowRight } from "react-icons/go";

// Definir la interfaz Producto
interface Producto {
  id: number;
  name: string;
  image: string;
  short_description: string;
  long_description: string;
}

// Tipar las props del componente
interface Props {
  productos: Producto[];
}

// Función getServerSideProps con tipado
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://sadsadasdasd-production.up.railway.app/products");
  const data: Producto[] = await res.json(); // Asignar el tipo Producto

  return {
    props: {
      productos: data,
    },
  };
};

const InformacionProducto = ({ productos }: Props) => {
  return (
    <main>
      <div className="bg-[#F4F4F4]">
        {/* Imagen Principal */}
        <section>
          <Image
            src="/imgProductos/imgSubproductos/chipeadora/chipeadora_disco/chipeadora_disco_principal.png"
            alt="Imagen Principal chipeadora de discos"
            width={1600}
            height={200}
          />
        </section>

        {/* Header */}
        <section className="pr-24 pl-24 mt-10">
          <div className="flex justify-between">
            <button>Filtrar</button>
            <h1 className="text-3xl">Chipeadoras de disco</h1>
            <p>{productos.length} productos en total</p>
          </div>
        </section>

        {/* Lista de productos */}
        <section className="pr-12 pl-12 mt-10 flex justify-center flex-wrap">
          {productos.map((producto) => (
            <div
              className="border mx-2 rounded-2xl shadow-lg mb-5 w-72 pt-5 pb-20 px-5"
              key={producto.id}
            >
              <div className="flex justify-center">
                <Image
                  src={producto.image || "/imgProductos/default-product.png"}
                  alt={producto.name}
                  width={200}
                  height={200}
                />
              </div>
              <p className="text-center text-sm mt-4">Chipeadora</p>
              <h2 className="text-center text-xl font-bold mt-1">{producto.name}</h2>
              <p className="text-center mb-2">{producto.short_description}</p>
              <p className="text-center">{producto.long_description}</p>
              <div className="flex justify-center mt-5">
                <button className="border border-black p-1 rounded-xl">
                  <Image
                    src="/imgProductos/logo_add_cart.png"
                    alt="Logo carrito"
                    width={33}
                    height={33}
                  />
                </button>
                <button className="bg-black text-white px-4 ml-3 rounded-xl">
                  <Link
                    className="flex items-center"
                    href={`/productos/${producto.id}`}
                  >
                    Ver productos <GoArrowRight className="text-white ml-3" />
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </section>

        <ProductosRelacionados />
      </div>
    </main>
  );
};

export default InformacionProducto;
