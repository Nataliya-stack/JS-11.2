const inputDNI = document.getElementById("inputDNI");
const btn = document.getElementById("boton");
const resultado = document.getElementById("resultado");

function obtenerLetraDNI(numeroDNI) {
  const numero = numeroDNI.trim();  
  const letrasValidas = "TRWAGMYFPDXBNJZSQVHLCKE";  
  const resto = numero % 23;  
  const letraCorrecta = letrasValidas.charAt(resto);  
  return letraCorrecta;
}

btn.addEventListener("click", () => {
  const dniUsuario = inputDNI.value.trim().toUpperCase();  
  const soloNumeros = /^[0-9]{8}$/;
  
  if (soloNumeros.test(dniUsuario)) {
    const letraCalculada = obtenerLetraDNI(dniUsuario);
    
    resultado.innerHTML = `
      La letra correcta es: <span style="color: green; font-weight: bold;">${letraCalculada}</span>
      El DNI completo es: <b>${dniUsuario}${letraCalculada}</b>
    `;
  } else {
    resultado.textContent = "❌ Por favor, ingrese exactamente 8 dígitos para el número del DNI.";
  }
});