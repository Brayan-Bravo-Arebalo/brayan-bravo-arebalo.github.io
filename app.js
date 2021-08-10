const boton = document.getElementById("conectar") 

boton.addEventListener("click", (e) =>{
    e.defaultPrevented;
    const conectarphp = async() =>{
        try {
            const respuesta = await fetch("https://brayan-bravo-arebalo.github.io/backend/conect.php")
            const datos = await respuesta.json()
            console.log(datos);
        } catch (error) {
            console.log(error);
        }
    }
    
    conectarphp();



})

