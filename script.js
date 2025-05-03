// Función para imprimir el CV
function printCV() {
    window.print()
  }
  
  // Agregar botón de impresión cuando el documento esté listo
  document.addEventListener("DOMContentLoaded", () => {
    // Crear botón de impresión
    const printButton = document.createElement("button")
    printButton.textContent = "Imprimir CV"
    printButton.id = "print-button"
    printButton.style.position = "fixed"
    printButton.style.bottom = "20px"
    printButton.style.right = "20px"
    printButton.style.padding = "10px 15px"
    printButton.style.backgroundColor = "#ff9800"
    printButton.style.color = "white"
    printButton.style.border = "none"
    printButton.style.borderRadius = "5px"
    printButton.style.cursor = "pointer"
    printButton.style.fontFamily = "Montserrat, sans-serif"
    printButton.style.fontWeight = "600"
    printButton.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)"
  
    // Agregar evento de clic
    printButton.addEventListener("click", printCV)
  
    // Agregar botón al documento
    document.body.appendChild(printButton)
  
    // Ocultar botón al imprimir
    const style = document.createElement("style")
    style.textContent = "@media print { #print-button { display: none; } }"
    document.head.appendChild(style)
  
    // Efecto hover para el botón
    printButton.addEventListener("mouseover", function () {
      this.style.backgroundColor = "#e68a00"
    })
  
    printButton.addEventListener("mouseout", function () {
      this.style.backgroundColor = "#ff9800"
    })
  
    // Animación para las barras de habilidades
    const skillDots = document.querySelectorAll(".dot.filled")
    skillDots.forEach((dot, index) => {
      setTimeout(() => {
        dot.style.transform = "scale(1.2)"
        setTimeout(() => {
          dot.style.transform = "scale(1)"
        }, 200)
      }, index * 100)
    })
  
    // Verificar si el video está disponible
    const video = document.querySelector("video")
    if (video) {
      video.addEventListener("error", () => {
        const videoContainer = document.querySelector(".video-container")
        if (videoContainer) {
          videoContainer.innerHTML =
            '<div style="padding: 20px; text-align: center; background-color: #f8f8f8;">El video no está disponible. Por favor, sube un archivo llamado "video-presentacion.mp4" para activar esta función.</div>'
        }
      })
    }
  })
  