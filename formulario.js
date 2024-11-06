document.addEventListener('DOMContentLoaded', function() {
  const inviteForm = document.getElementById('inviteForm');
  const guestList = document.getElementById('guestList');
  const errorMessage = document.getElementById('errorMessage'); // Referencia al elemento de mensajes de error

  inviteForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita la recarga de la página al enviar el formulario
      const guestName = document.getElementById('guestName').value.trim();

      // Validar el nombre del invitado
      if (guestName === "") {
          // Mostrar mensaje de error si el nombre está vacío
          errorMessage.textContent = "Por favor, ingresa un nombre válido.";
          errorMessage.classList.remove('d-none');
          return;
      }

      // Ocultar mensaje de error si la validación es exitosa
      errorMessage.classList.add('d-none');

      // Crear un nuevo elemento de lista para el invitado
      const listItem = document.createElement('li');
      listItem.textContent = guestName;

      // Crear botón de eliminar
      const deleteButton = document.createElement('button');
      deleteButton.textContent = "Eliminar";
      // Añadir evento de clic al botón de eliminar
      deleteButton.addEventListener('click', function() {
          guestList.removeChild(listItem);
      });

      // Añadir el botón de eliminar al elemento de lista
      listItem.appendChild(deleteButton);
      // Añadir el elemento de lista a la lista de invitados
      guestList.appendChild(listItem);
      // Reiniciar el formulario
      inviteForm.reset();
  });
});
