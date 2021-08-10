const boton = document.getElementById("conectar") 

boton.addEventListener("click", (e) =>{
    e.defaultPrevented;
    const conectarphp = async() =>{
        try {
            const respuesta = await fetch("http://localhost/vs%20code/mi%20primera%20pagina%20en%20github/backend/conect.php")
            const datos = await respuesta.json()
            console.log(datos);
        } catch (error) {
            console.log(error);
        }
    }
    
    conectarphp();



})

