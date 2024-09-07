function calculateReps() {
    const currentWeight = parseFloat(document.getElementById('currentWeight').value);
    const reps = parseFloat(document.getElementById('reps').value);
    const newWeight = parseFloat(document.getElementById('newWeight').value);

    // Fórmula de Epley: 1RM = Peso * (1 + 0.0333 * Repeticiones)
    const oneRM = currentWeight * (1 + 0.0333 * reps);

    // Calcular las nuevas repeticiones con el nuevo peso
    const newReps = (oneRM / newWeight - 1) / 0.0333;

    // Mostrar el resultado
    document.getElementById('result').innerText = `Debes hacer aproximadamente ${Math.round(newReps)} repeticiones con ${newWeight} kg.`;
}