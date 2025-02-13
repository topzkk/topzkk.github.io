document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.getElementById("no");

    function moveButton() {
        const x = Math.random() * (window.innerWidth - noButton.clientWidth);
        const y = Math.random() * (window.innerHeight - noButton.clientHeight);

        noButton.style.position = "absolute";
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    }

    noButton.addEventListener("mouseover", moveButton);
    
    noButton.addEventListener("click", moveButton);
});


function nextPage() {
    window.location.href = "yes.html"; 
}
