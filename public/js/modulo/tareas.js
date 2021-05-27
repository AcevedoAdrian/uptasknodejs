import axios from "axios";

const tareas = document.querySelector('.listado-pendientes');

if(tareas){
tareas.addEventListener( 'click' , e =>{
  if(e.target.classList.contains('fa-check-circle')){
    const icono = e.target
    const idTarea = icono.parentElement.parentElement.dataset.tarea;
    // console.log(idTarea);
    // Tenemos que hacer un request a tareas controller /tareas/:id
    const url = `${location.origin}/tareas/${idTarea}`
    console.log(url);
    axios.patch(url, {
      idTarea
    }).then(function(respuesta){
      // para agregar a una clase al html cuando se guardan los cambio
      icono.classList.toggle('completo')
    })
  }
})

}

export default tareas