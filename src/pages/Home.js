import React from 'react'
import Header from '../components/Header'
import Footer  from '../components/Footer'
// import code from '../assets/code.jpg'

const Home = () => {
    return (

    <>
    <div className='bg-[url(../assets/code.jpg)]'> 
    <Header/>
    <div className='text-center'>
        <h1 className='text-2xl  underline text-underline-offset-4'>Welcome to my Porfolio!</h1>
        <p>My name is Francisco Solis and </p>
        <p>I am an aspiring Full Stack web Developer</p>
        <p>Here you will find information about me, experience/skills, projects and contact information for potential opportunities</p>
    </div>
    <Footer/>
    </div>
    </>
    )
}


export default Home