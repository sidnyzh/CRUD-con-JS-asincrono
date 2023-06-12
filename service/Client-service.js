const crearNUevaLinea = (nombre, email) => {
   const line = document.createElement("tr");
    //backticks mark 
    const content =  `
    <td class="td" data-td>${nombre}</td>
    <td>${email}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html"
            class="simple-button simple-button--edit"
            >Editar</a
          >
        </li>
        <li>
          <button
            class="simple-button simple-button--delete"
            type="button"
          >
            Eliminar
          </button>
        </li>
      </ul>
    </td>
  `; 
  line.innerHTML = content; 
  return line; 
}; 

//Esto recorre todo el árbol del Dom y recoge el elemeto indicado 
const table = document.querySelector("[data-table]");



//Abir http (método, url)
//CRUD
//En vez de que sea e3n navegar el que abra esa informacion, ahoa va a ser JS 

const listaCLientes = () => {
    const listaClientes = () => {
        const promise = new Promise((resolve, reject) => {
          const http = new XMLHttpRequest();
          http.open("GET", "http://localhost:3000/perfiles");
      
          http.send();
      
          http.onload = () => {
            const response = JSON.parse(http.response);
            if (http.status >= 400) {
              reject(response);
            } else {
              resolve(response);
            }
          };
        });
        return promise;
      };
    }
listaCLientes().then((data) => {
    data.forEach(perfil => {
        const newLinen = crearNUevaLinea(perfil.no, perfil.email)
        table.appendChild(newLinen);
      });
}).catch((error) => alert("ocurrio un error"))




