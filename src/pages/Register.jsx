/* eslint-disable react/no-children-prop */
import { Form } from "../components/Form";
import { portada } from "../images";

export function Register() {
  return (
    <>
      <main className="grid grid-cols-2 items-center justify-center h-screen w-screen">
        <div className="flex justify-center items-center ml-28">
          <img
            src={portada}
            alt="Imágen de Rick and Morty con su logo"
            className="items-center"
          />
        </div>
        <div className="flex justify-center items-center">
          <Form
            children="Registro"
            text="¿Ya tienes cuenta?, "
            goPath="/"
            nameText="Inicia Sesión!"
            action="register"
            textButton='Registrarse'
          />
        </div>
      </main>
    </>
  );
}
