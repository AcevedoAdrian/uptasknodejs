import Swal from "sweetalert2";

export const actualizarAvances = () => {
  // seleciono las tareeas existences
  const tareas = document.querySelectorAll("li.tarea");

  if (tareas.length) {
    // seleccionar las tareas seleccionadas
    const tareasCompletadas = document.querySelectorAll('i.completo')
    // calcular el avance
    const avance = Math.round((tareasCompletadas.length /tareas.length ) * 100)

    // mostrar el avance
    const porcentaje = document.getElementById('porcentaje');
    porcentaje.style.width = avance+'%';

    if(avance === 100){
          // Alerta si completa el 100% de las tareas
          Swal.fire(
            'Completaste el Proyecto',
            'Feliciadades, haz terminado tus tareas',
            'success'
          )
    }
  }
};
