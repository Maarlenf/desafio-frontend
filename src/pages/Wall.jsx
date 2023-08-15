import { getName } from "../lib/login";
import { useEffect, useState } from "react";
export function Wall(){
 const name = localStorage.getItem('user');
 const [showName, setShowName ] = useState(''); 
 const [userImage, setUserImage ] = useState('');

 useEffect(() => {
    getName().then((res) => {
        const getName = res.data.filter((user) => {
            console.log(user);
         return user.email === name;
        });
        setShowName(getName[0].first_name);
        setUserImage(getName[0].avatar);
      })
 }, [name]);
 
 

    return(
        <div>
             <nav className="">
             <div className="group flex items-center justify-around ml-4 mt-2 border-2 border-green-500 w-48 h-20 rounded-xl text-white bg-green-500 bg-opacity-5">
  <img className=" h-12 w-12 rounded-full" src={userImage} alt="" />
  <div className="ltr:ml-3 rtl:mr-3">
    <p className="text-sm font-medium text-slate-300 group-hover:text-white">{'Hola ' + showName + '!'}</p>
    <p className="text-sm font-medium text-slate-500 group-hover:text-slate-300"></p>
  </div>
</div>
      </nav>
        </div>
        )
}