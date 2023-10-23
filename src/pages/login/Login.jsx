import { useState } from 'react'
import './styleLogin.css'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Login1 from './components/Login1'
import Login2 from './components/Login2'
import Login3 from './components/Login3'

export default function Login(){

    var [loginState,setLoginState]=useState(1)

    return (
        <main className='main2'>
            <Navbar />
            {loginState===1 && <Login1 setLoginState={setLoginState}/>}
            {loginState===2 && <Login2 setLoginState={setLoginState}/>}
            {loginState===3 && <Login3 setLoginState={setLoginState}/>}
            <Footer />
        </main>
    )
}