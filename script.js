document.getElementById("secret-btn").addEventListener("click", function() {
    let message = document.getElementById("secret-message");
    message.style.display = message.style.display === "none" ? "block" : "none";
});

function animateBadge() {
    let badge = document.querySelector(".award-badge");
    badge.style.transform = "scale(1.5)";
    setTimeout(() => {
        badge.style.transform = "scale(1)";
    }, 500);
    badge.innerHTML = "🌿 Congrats, Detective Rahmaniya! 🎉";
}