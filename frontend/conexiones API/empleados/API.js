const url = "http://localhost:4001/empleado"


const getEmpleados = async () =>{
    try {
        const respons = await fetch(url);
        const result = await respons.json()

        return result
    } catch (error) {
        console.log(error);
    }
}

const borrar = async id =>{
    try {
        await fetch(`${url}/${id}`,{
            method: 'DELETE'
        })
    } catch (error) {
        
    }
}

const nuevoEmp = async (empleado) => {
    try {
        await fetch(url,{
            method: 'POST',
            body: JSON.stringify(empleado),
            headers: {
                'Content-Type' : 'Application/json'
            }
        })
    } catch (error) {
        console.log(error);
    }
};



const updCategorias = async datos =>{
    try {
      await fetch (`${url}/${datos._id}`,{
        method:'PATCH',
        body:JSON.stringify(datos),
        headers:{
          "Content-Type" : "application/json"
        }
      })
      .then(response => response.json())
      .then(updateCategorias => {
        console.log('DATOS Actualizados',updateCategorias);
      })
      window.location="./Inventario.html" 
    } catch (error) {
      console.log(error);
    }
  };

export {
    getEmpleados,
    borrar,
    nuevoEmp
}