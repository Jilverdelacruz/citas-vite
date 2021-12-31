
const Formulario = () =>{
    return(

        <div className="md:w-1/2 lg:w-2/5">
            <h1 className="font-black text-3xl text-center">Seguimiento Pacientes</h1>
        <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes y {''}
            <span className="text-indigo-600 font-bold">Administrarlos</span>
        </p>
        <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
            <div className=" mb-5">
                <label htmlFor="mascota" className="block text-gray-700 font-bold uppercase">Nombre Mascota</label>
                <input 
                id="mascota"
                type='text' placeholder="Nombre de la Mascota"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div>
            <div className=" mb-5">
                <label htmlFor="propietario" className="block text-gray-700 font-bold uppercase">Nombre Propietario</label>
                <input 
                id="mascota"
                type='text' placeholder="Nombre del Propietario"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />   
            </div>
            <div className=" mb-5">
                <label htmlFor="email" className="block text-gray-700 font-bold uppercase">Email</label>
                <input 
                id="email"
                type='text' placeholder="Email Contacto Propietario"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />   
            </div>
            <div className=" mb-5">
                <label htmlFor="alta" className="block text-gray-700 font-bold uppercase">Alta</label>
                <input 
                id="alta"
                type='date' placeholder="Email Contacto Propietario"
                className="border-2 w-full p-2 mt-2  rounded-md"
                />   
            </div>
            <div className=" mb-5">
                <label htmlFor="sintomas" className="block text-gray-700 font-bold uppercase">Síntomas</label>
                <textarea 
                id="sintomas"
                className="border-2 w-full p-2 mt-2  rounded-md"
                placeholder="Describe los síntomas"
                />
            </div>
            <input 
            type='submit'
            className="bg-indigo-600 text-white w-full py-3 hover:bg-indigo-700 cursor-pointer uppercase font-bold transition-all"
            value='Agregar Paciente'
            />
        </form>
        </div>
    )
}

export default Formulario