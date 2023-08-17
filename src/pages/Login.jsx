/* eslint-disable react/no-children-prop */
import { Form } from "../components/Form";
import { portada } from "../images";
    
export function Login() {
  return (
    <>
      <main className="grid grid-cols-2 items-center justify-center h-screen w-screen -sm:flex -sm:flex-col -sm:justify-start -sm:items-center xs:flex xs:flex-col xs:items-center xs:justify-start -sm:mt-10 xs:mt-2 sm:mt-0 sm:ml-0 md:mt-0 md:ml-0 ">
        <div className="block mr-auto ml-auto -mt-10 max-w-full max-h-full lg:ml-32 xl:ml-32 2xl:ml-32 md:ml-10 ">
          <img
            src={portada}
            alt="Imágen de Rick and Morty con su logo"
            className="max-w-full -sm:max-w-[300px] xs:max-w-[320px] max-h-full"
          />
        </div>
        <div className="block mr-auto ml-auto -mt-10 max-w-full max-h-full -sm:mt-5">
         
          <Form
            children="Iniciar sesión"
            text="¿Aún no tienes cuenta?, "
            goPath="/register"
            nameText="Registrate!"
            action="login"
            textButton='Iniciar sesión'
          />
        </div>
      </main>
    </>
  );
}
