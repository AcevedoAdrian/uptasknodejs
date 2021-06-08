import Swal from "sweetalert2";
import axios from "axios"
import {actualizarAvances} from '../funciones/avances'


const tareas = document.querySelector(".listado-pendientes");

if (tareas) {

  tareas.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-check-circle")) {
      const icono = e.target;
      const idTarea = icono.parentElement.parentElement.dataset.tarea;
      // console.log(idTarea);
      // Tenemos que hacer un request a tareas controller /tareas/:id
      const url = `${location.origin}/tareas/${idTarea}`;

      // Consulta a al base de datos y si esta correcto cambia a verde, por la respuesta que recivo desde el controladore
      axios
        .patch(url, {
          idTarea,
        })
        .then(function (respuesta) {
          // para agregar si no esta y si esta se lo pone a una clase al html cuando se guardan los cambio
          if(respuesta.status ===200){
          icono.classList.toggle("completo");
          actualizarAvances();
        }
        });
    }
    if (e.target.classList.contains("fa-trash")) {
      const tareaHTML = e.target.parentElement.parentElement;
      // aca recupereo el id desde el atrivuto personalizado data-tarea
      const idTarea = tareaHTML.dataset.tarea;

      // preguntamos si esta seguro que desea eliminar una tarea
      Swal.fire({
        title: "Deseas borrar este tarea?",
        text: "Uns tarea eliminada no se puede eliminar!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Borrar!",
        cancelButtonText: "No, Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          // enviar delete a axios
          // location.origin = nos da la ubicacion del servidor
          // location.pathname = la rutas
          const url = `${location.origin}/tareas/${idTarea}`;
  
          // hago la petecion a la url para que elimine el proyecto con la url correspondiente
          axios
            .delete(url, { params: { idTarea } })
            .then((res) => {
                console.log(res);
                if(res.status===200){

                  // eliminar el nodo html
                  // voy un elemento mas arriba y luego elemino el nodo declarando el elemento que quiero eliminar
                  tareaHTML.parentElement.removeChild(tareaHTML);

                  // Alerta
                  Swal.fire(
                    'Tarea Eliminada',
                    res.data,
                    'success'
                  )
                  actualizarAvances()

                }
            })
            .catch(() => {
              Swal.fire({
                type: "error",
                title: " Hubo un error",
                text: "No se pudo completar la orpeacion",
              });
            });
        }
      });
    }

  });
}

export default tareas;
