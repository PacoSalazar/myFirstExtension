// Función para enviar "Hello World" al textarea en la página
function injectHelloWorld() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: () => {
                const textarea = document.getElementById("editor");
                if (textarea) {
                    textarea.value = "Hello World!";
                } else {
                    console.log("El elemento <textarea> no se encontró en la página.");
                }
            }
        });
    });
}

// Escuchar el evento de clic en el botón y ejecutar la función
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("sendButton").addEventListener("click", injectHelloWorld);
});