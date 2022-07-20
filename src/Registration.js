import React, { useEffect, useState ,useRef} from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';


function Registration() {

    const [userRegistration, setUserRegistration] = useState({
        username : "",
        email : "",
        password : ""
    });

    const [records, setRecords] = useState([
        {username: "Aysel", email: "ayselmemmedova9317@gmail.com", password: "77777", id: "3937rw73r9"}
    ]);
   

    const [alert, setAlert] = useState(false);

    const [hide, setHide] = useState(true);

    const isInitialMount = useRef(true);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserRegistration({...userRegistration, [name] : value})
    }

    useEffect(() => {
        
        if(JSON.parse(window.localStorage.getItem("records")) !== null) {
            setRecords(JSON.parse(window.localStorage.getItem("records")));
        }
    
    }, []);

    
    useEffect(()=>{

        if(isInitialMount.current) {     
            isInitialMount.current = false
        } else{
            localStorage.setItem("records", JSON.stringify(records));
            // console.log(records);
        }

    });


    const handleSubmit = (e) => {
        e.preventDefault();

        const {username, email, password} = userRegistration;

        if(!username || !email || !password) {
            setAlert(true)
        } else {
            setAlert(false);

            const newRecord = {...userRegistration, id : new Date().getTime().toString()};
            
            setRecords([...records, newRecord])
            setHide(false);

            localStorage.setItem("email", JSON.stringify(newRecord.email));
            localStorage.setItem("password", JSON.stringify(newRecord.password));
        }  
    }


    


    return (
        <>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-indigo-900">
                Qeydiyyat Formu
            </h2>

            <div className={`mt-8 border-2 border-solid rounded-lg p-7 shadow-lg ${alert ? "border-red-500" : "border-gray-200"}`}>

                {alert ? <p className="alert font-semibold">Zəhmət olmasa, bütün xanaları doldurun.</p> : ''}

                <form className="space-y-6 rounded-md" action="" onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-3">
                            İstifadəçi adı
                        </label>
                        <input type="text" autoComplete="off" 
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        value={userRegistration.username}
                        onChange={handleInput}
                        name="username" id="username" />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                            E-mail
                        </label>
                        <input type="e-mail" autoComplete="off" 
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        value={userRegistration.email}
                        onChange={handleInput}
                        name="email" id="email" />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-3">
                            Şifrə
                        </label>
                        <input type="text" autoComplete="off" 
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        value={userRegistration.password}
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

                            Qeydiyyatdan keç

                        </button>
                    </div>

                </form>

            </div>

            <div className="records mt-9">
                <h3 className="text-center font-bold">
                    Qeydiyyatdan keçən istifadəçi məlumatlarını
                    <button className="ml-2 underline text-indigo-500 hover:no-underline" 
                    onClick={() => setHide(!hide)}>
                        {hide ? 'Göstər' : 'Gizlə'}
                    </button>
                </h3>

                

                {hide ? '' :
                
                    <div className="table w-full mt-3">
                        <div className="table-header-group bg-dark-500 font-bold">
                            <div className="table-row">
                            <div className="table-cell text-center border border-gray-500 bg-gray-100">İstifadəçi adı</div>
                            <div className="table-cell text-center border border-gray-500 bg-gray-100">E-mail</div>
                            <div className="table-cell text-center border border-gray-500 bg-gray-100">Şifrə</div>
                            </div>
                        </div>

                        <div className="table-row-group">
                            {
                                records.map((user) => {
                                    const {id, username, email, password} = user;
                                    return (
                                        <div className="table-row record" key={id}>
                                            <div className="table-cell border border-gray-500 px-1">{username}</div>
                                            <div className="table-cell border border-gray-500 px-1">{email}</div>
                                            <div className="table-cell border border-gray-500 px-1">{password}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        
                    </div>

                }
            </div>

        </>
    )

}

export default Registration