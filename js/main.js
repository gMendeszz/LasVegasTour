document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement;

    // Verifica e aplica o tema salvo no localStorage
    const savedTheme = localStorage.getItem("theme") || "light"; // Default é "light"
    
    if (savedTheme === "dark") {
        htmlElement.classList.add("dark");
    } else {
        htmlElement.classList.remove("dark");
    }

    function toggleTheme() {
        if (htmlElement.classList.contains("dark")) {
            htmlElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            console.log("Tema alterado para: light");
        } else {
            htmlElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            console.log("Tema alterado para: dark");
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", toggleTheme);
    }


});





