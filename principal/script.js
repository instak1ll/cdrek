function showApp(appName) {
    const appContainer = document.getElementById('app-container');
    
    if (appName === 'home') {
        // Mostrar la sección de inicio
        document.getElementById('home').style.display = 'block';
        appContainer.style.display = 'none';
    } else {
        // Ocultar la sección de inicio
        document.getElementById('home').style.display = 'none';
        appContainer.style.display = 'block';
        
        // Cargar la aplicación seleccionada en el contenedor
        appContainer.innerHTML = `<iframe src="../${appName}/index.html" style="width: 100%; height: 100vh; border: none;"></iframe>`;
    }
}
