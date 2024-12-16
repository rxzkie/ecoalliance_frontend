

import { Dispatch, SetStateAction } from "react";
import { VscChromeClose } from "react-icons/vsc";

type Props = {
    openLogin: boolean;
    setOpenLogin: Dispatch<SetStateAction<boolean>>;
    setOpenRegistro:Dispatch<SetStateAction<boolean>>
    setOpenRecuperarPassword:Dispatch<SetStateAction<boolean>>
  }

const ModalLogin:React.FC<Props> = ({openLogin,setOpenLogin,setOpenRegistro,setOpenRecuperarPassword}) =>{

    const openModalRegistro = ()=>{
        setOpenRegistro(true)
        setOpenLogin(false)
    }

    const openModalRecuperarPassword = () =>{
        setOpenRecuperarPassword(true)
        setOpenLogin(false)
    }


    return(
    
        <div className={` justify-end ${ openLogin ? "flex" : "hidden"} `}>
            <div className="bg-white w-1/3 pr-14 pl-14  pb-10 absolute z-30 border border-slate-200 rounded-bl-2xl">
                <div className="flex justify-between ">
                    <div className="mt-10 flex items-center">
                        <h2 className="mr-5 text-2xl">Login</h2>
                        <p>Inicia sesión</p>    
                    </div>
                    <div className="mt-10">
                        <p className="text-2xl cursor-pointer" onClick={()=>{setOpenLogin(false)}}><VscChromeClose className="cursor-pointer"/></p>
                    </div>
                </div>
                <div className="border-b border-[#C0C0C0] mt-3"></div>

                <form action="" className="mt-10 pr-14 pl-6 ">
                    <label className="mt-10 mb-5  text-xl" htmlFor="">Correo electrónico</label>
                    <input type="email" className="block my-3 w-full border border-slate-500 rounded-xl py-2 px-4" placeholder="example@gmail.com"/>
                    <label className="mt-10 mb-5  text-xl" htmlFor="">Password</label>
                    <input type="password" className="block mt-3 w-full border border-slate-500 rounded-xl py-2 px-4" placeholder="*************" />
                </form>
  
                    <div className="pr-14 pl-6">
                        <button className="bg-black text-white w-full mt-10 py-2 rounded-xl ">Iniciar sesión</button>
                    </div>

                    <div className="flex justify-between pr-14 pl-6 mt-5">
                        <p className="underline text-blue-500 cursor-pointer" onClick={()=>openModalRegistro()}>Registrarse</p>
                        <p className="underline text-blue-500 cursor-pointer" onClick={()=>openModalRecuperarPassword()}>Recuperar contraseña</p>
                    </div>
                </div>


            </div>
        
    )
}

export default ModalLogin