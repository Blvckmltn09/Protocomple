import React from 'react'

const page = () => {
  return (
    <section className='mt-8'>
    <h1 className='text-center text-2x1'>Registro</h1>
    <form className='block mx-auto max-w-xs text-center '>
        <input type='email' placeholder='Ingrese su Email'/>
        <input type='password' placeholder='Ingrese su Contraseña'/>
        <div>
        <button type='submit'>Registrar</button>
        </div>
        </form>
    </section>
  )
}

export default page