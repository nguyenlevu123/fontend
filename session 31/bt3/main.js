const body = document.querySelector(".body") || document.body;

        document.querySelector(".box1").addEventListener("click", () => {
            body.style.backgroundColor = "green";
        });

        document.querySelector(".box2").addEventListener("click", () => {
            body.style.backgroundColor = "red";
        });

        document.querySelector(".box3").addEventListener("click", () => {
            body.style.backgroundColor = "violet";
        });