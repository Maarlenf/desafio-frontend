/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { tryLogin } from "../lib/login";
import { createUser } from "../lib/register";
import { Button } from "./Button";


export function Form({ children , text, goPath, nameText, action, textButton}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fail, setFail] = useState("");
  const navigate = useNavigate();
  const canLogin = email !== '' && password !== '';
  
 
    const login = () => {
    return tryLogin(email, password).then((res) => {
      if (res.error === "user not found") {
        //possible error
        //user not found
        setFail("Usuario no encontrado. Por favor registrese.");
      } else if (res.error) {
        setFail("Ha ocurrido un error, por favor verifique sus credenciales");
      } else {
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", email);
        navigate("/wall");
      }
    });
  };

  const register = () => {
    createUser(email, password)
    .then((res) => {
        if(res.error === "Note: Only defined users succeed registration"){
            setFail('Disculpe, no se pudo registrar el usuario');
        }else if(res.id < 7){
            setFail('El Usuario ya esta registrado');
        }else{
            navigate("/wall");
            localStorage.setItem('token', res.token);
            localStorage.setItem('user', email);
        }
    })
  }
  

  const handleSubmit = (e) => {
    if(action === "login"){
        e.preventDefault();
    login();
    }else{
        e.preventDefault();
        register();
    }
    
  };

  return (
   <form className="flex flex-col justify-evenly items-center border-2 border-green-500 w-80 h-96 rounded-xl p-4 text-white bg-green-500 bg-opacity-5 -sm:w-72 md:w-80 sm:w-72">
      <h1 className="text-xl">Bienvenida/o</h1>
      <h3 className="text-lg">{children}</h3>
      <label htmlFor="inputEmail" className="flex flex-col w-full text-sm">
        Email
        <input
          required
          type="email"
          id="inputEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ejemplo@ejemplo.com"
          className="text-neutral-900 text-center rounded-lg p-2 border-2 border-cyan-500 w-full mt-1 text-sm"
        />
      </label>
      <label htmlFor="inputPassword" className="flex flex-col w-full text-sm">
        Contraseña
        <input
          required
          type="password"
          id="inputPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
          className="rounded-lg p-2 border-2 text-center border-cyan-500 w-full text-sm mt-1 text-neutral-900"
        />
      </label>
      <label htmlFor="messageError" className="w-full h-8 -mt-1">
        <p className="inline-block w-full text-white rounded-lg p-2 h-10 -mt-2  text-[13px] text-start " id="messageError">
          {fail}
        </p>
      </label>
        <p className="text-xs -mt-2">{text}
      <a href={goPath} className=" underline">{nameText}</a>
      </p>
      <Button
      disabled={!canLogin}
        onClick={handleSubmit}
        className="p-2 rounded-lg bg-cyan-500 text-neutral-900 text-sm font-semibold"
        children={textButton}
      />
    </form>
  );
}
