import Image from "next/image"


const ContactoPage = () =>{
    return(
        <main>
            <section > 
                <Image src="/imgContacto/img-contacto-principal.png" alt="Imagen Princiapl " width={2000} height={200} className="relative"/>
            </section>

            <section className="flex pr-24 pl-24 mt-28 mb-28 items-center">
                    <div>
                        <h1 className="text-3xl">Contáctanos y descubre la solución ideal para tu empresa y el medio ambiente</h1>
                    </div>
                    <div>
                        <p>En Eco Alliance, estamos comprometidos con brindarte las mejores soluciones tecnológicas para el cuidado del medio ambiente. 
                        Si tienes preguntas, inquietudes o necesitas más información sobre nuestros productos y servicios, no dudes en ponerte en contacto con nosotros.</p>
                    </div>
                </section>


          
        </main>
    )
}

export default ContactoPage