function calcularPesoEquivalente() {
    // Obtener los valores ingresados por el usuario
    const altura1 = parseFloat(document.getElementById('altura1').value);
    const peso1 = parseFloat(document.getElementById('peso1').value);
    const pesoLevantado = parseFloat(document.getElementById('pesoLevantado').value);
    const altura2 = parseFloat(document.getElementById('altura2').value);
    const peso2 = parseFloat(document.getElementById('peso2').value);

    // Validar que los valores estén completos
    if (isNaN(altura1) || isNaN(peso1) || isNaN(pesoLevantado) || isNaN(altura2) || isNaN(peso2)) {
        document.getElementById('resultado').textContent = "Por favor, llena todos los campos.";
        return;
    }

    // Cálculo del peso equivalente
    const pesoEquivalente = (peso2 / peso1) * pesoLevantado;

    // Mostrar el resultado
    document.getElementById('resultado').textContent = 
        `La segunda persona debería levantar aproximadamente ${pesoEquivalente.toFixed(2)} kg para un esfuerzo equivalente.`;
}
