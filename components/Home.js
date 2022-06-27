export function Menu() {
    const menu = document.createElement("div");
    menu.innerHTML=` <header>
    <h1>SPESIAL</h1>
</header>
<main>
    <div class="fondo">
        <img src="img/IMG_9941 3.png" alt="Dinosapio">
    </div>

    <div class="habla">
        <p>
            Habla con Dinosapio
        </p>
    </div>
</main>`;

    return menu;
}