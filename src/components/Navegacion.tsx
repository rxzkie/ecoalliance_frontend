
  

const Navbar = ()=> {

    const navLinks = [
        {"nombre":"INICIO","url":"/"},
        {"nombre":"PRODUCTOS","url":"/productos"},
        {"nombre":"SOLUCIONES","url":"/soluciones"},
        {"nombre":"SERVICIOS","url":"/servicios"},
        {"nombre":"ACERCA DE EAX","url":"/acerca-de-eax"},
        {"nombre":"CONTACTO","url":"/contacto"}
      ]

    return(
        navLinks.map(link=>{
            <p>{link.nombre}</p>
        })
    )
}

export default Navbar