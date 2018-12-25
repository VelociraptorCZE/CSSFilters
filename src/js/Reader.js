/**
 * CSS filters
 * Copyright (C) Simon Raichl 2018
 * MIT License
 */

import ResponsiveImage from "./ResponsiveImage.js";

export default class Reader extends ResponsiveImage {
    constructor() {
        super(true);
        this.select = document.getElementById("js-img-select");
        this.upload = document.getElementById("js-image-upload-btn");
        this.pattern = /(.png)|(.bmp)|(.jpg)|(.ico)|(.svg)/g;
        this.init();
    }

    init() {
        const { upload, select, img, pattern } = this;

        select.addEventListener("click", () => {
           this.upload.click();
        });

        upload.addEventListener("change", () => {
            const f = new FileReader();
            const file = upload.files[0];

            f.onload = () => {
                img.src = f.result;
                setTimeout(() => this.checkResponsivity(), 20);
            };

            try {
                pattern.test(file.name.toLowerCase()) ? f.readAsDataURL(file) : null;
            }
            catch {}
        });
    }
}