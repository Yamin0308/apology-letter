function showHearts() {
    let heartsContainer = document.getElementById("hearts");

    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤";
        heart.style.left = Math.random() * 80 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 1 + "s";
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}