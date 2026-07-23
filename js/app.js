// ===============================
// Football Empire India
// App Entry Point
// ===============================

window.addEventListener("load", () => {

    // Splash screen for 2 seconds
    setTimeout(() => {

        document.getElementById("loadingScreen").style.display = "none";

        document.getElementById("game").style.display = "block";

        // Initialize menu
        initializeMenu();

        // Show home screen
        showHome();

    }, 2000);

});