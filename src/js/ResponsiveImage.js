/**
 * CSS filters
 * Copyright (C) Simon Raichl 2018
 * MIT License
 */

export default class ResponsiveImage {
    constructor(appendListener) {
        this.img = document.getElementById("js-image-example-img");

        if (appendListener) {
            window.addEventListener("resize", () => this.checkResponsivity());
        }
    }

    checkResponsivity() {
        window.innerWidth < this.img.naturalWidth ? this.img.style.width = "100%" : this.img.style.width = "initial";
    }
}