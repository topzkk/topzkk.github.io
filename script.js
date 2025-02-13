document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.getElementById("no");

    noButton.addEventListener("mouseover", () => {
        const x = Math.random() * window.innerWidth - noButton.clientWidth;
        const y = Math.random() * window.innerHeight - noButton.clientHeight;

        noButton.style.position = "absolute";
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });
});

function nextPage() {
    window.location.href = "yes.html"; // เปลี่ยนหน้าไปยัง yes.html
}
