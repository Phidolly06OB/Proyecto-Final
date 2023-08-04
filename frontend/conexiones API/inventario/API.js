const url = "http://localhost:4001/inventario"
const urlcateg = "http://localhost:4001/categoria"

const getInventario = async () =>{
    try {
        const respons = await fetch(url);
        const result = await respons.json()

        return result
    } catch (error) {
        console.log(error);
    }
}

const getCategorias = async () =>{
    try {
        const respons = await fetch(urlcateg);
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

const nuevoInv = async (categoria) => {
    try {
        await fetch(url,{
            method: 'POST',
            body: JSON.stringify(categoria),
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
    getInventario,
    borrar,
    updCategorias,
    nuevoInv,
    getCategorias
}