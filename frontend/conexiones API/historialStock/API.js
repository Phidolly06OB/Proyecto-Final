const url = "http://localhost:4001/historialInv"

const getHistorial = async () =>{
    try {
        const respons = await fetch(url);
        const result = await respons.json()

        return result
    } catch (error) {
        console.log(error);
    }
}


const nuevaCategoria = async (categoria) => {
    try {
        await fetch(urlAdd,{
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
      await fetch (`${urlUpd}/upd/${datos._id}`,{
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
      window.location="./index.html" 
    } catch (error) {
      console.log(error);
    }
  };

export {
    getHistorial
}