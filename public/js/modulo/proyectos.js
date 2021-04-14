import Swal from "sweetalert2";
import axios from "axios";

const btnEliminar = document.querySelector("#eliminar-proyecto");

if (btnEliminar) {
  btnEliminar.addEventListener("click", (e) => {
    // accedo la el valor del atributo personalizado que creamos en el html
    const urlProyecto = e.target.dataset.proyectoUrl;

    Swal.fire({
      title: "Deseas borrar este proyecto?",
      text: "Un proyecto eliminado no se puede eliminar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Borrar!",
      cancelButtonText: "No, Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        // enviar petecion a axios
        // location.origin = nos da la ubicacion del servidor
        // location.pathname = la rutas
        const url = `${location.origin}/proyectos/${urlProyecto}`;

        // hago la petecion a la url para que elimine el proyecto con la url correspondiente
        axios
          .delete(url, { params: { urlProyecto } })
          .then((res) => {
            // console.log(res.data);

            if (res.status === 200) {
              Swal.fire("Proyecto Eliminado!", res.data, "success");
              setTimeout(() => {
                // Esto es para redireccionar a la pagina principal
                window.location.href = "/";
              }, 1000);
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
  });
}

export default btnEliminar;
