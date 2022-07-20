import React, { useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';


export default function Login() {

    const [alert, setAlert] = useState(false);

    const [login, setLogin] = useState({
        email : "",
        password : ""
    });

    const [loginedUser, setLoginedUser] = useState(''); 

    const [welcome, setWelcome] = useState(false);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setLogin({...login, [name] : value})
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const {email, password} = login;
        
        const allUsers = JSON.parse(localStorage.getItem('records'));
    
        const usercheck = allUsers.map(user => (user.email === login.email && user.password === login.password));
        console.log(usercheck);

        if(!email || !password) {
            setAlert(true);
            setWelcome(false);
        } else if(usercheck.includes(true)) {
            setAlert(false);
            setWelcome(true);
            const index = usercheck.indexOf(true);
            setLoginedUser(allUsers[index].username);
        }  else {
            setAlert(true);
            setWelcome(false);
        }
    }



    return (
        <>
            {welcome ? <p className="success font-semibold">
                <span style={{fontWeight: "italic", fontSize: "18px"}}>{loginedUser}</span>, 
                hesabınıza uğurla daxil oldunuz
            </p> : 
                <>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-indigo-900">
                        Hesabına daxil ol
                    </h2>

                    <div className={`mt-8 border-2 border-solid rounded-lg p-7 shadow-lg ${alert ? "border-red-500" : "border-gray-200"}`}>

                        {alert ? <p className="alert font-semibold">Zəhmət olmasa, bütün xanaları düzgün doldurun.</p> : ''}

                        <form className="space-y-6 rounded-md" action="" onSubmit={handleSubmit}>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                                    E-mail
                                </label>
                                <input type="e-mail" autoComplete="off" 
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                value={login.email}
                                onChange={handleInput}
                                name="email" id="email" />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-3">
                                    Şifrə
                                </label>
                                <input type="text" autoComplete="off" 
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                value={login.password}
                                onChange={handleInput}
                                name="password" id="password" />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                    </span>

                                    Daxil ol

                                </button>
                            </div>

                        </form>

                    </div>
                </>
            }
        </>
    )
  
}
