/**
 * CSS filters
 * Copyright (C) Simon Raichl 2018
 * MIT License
 */

export default class RangeControl {
    constructor() {
        this.container = document.getElementById("js-img-container");
        this.code = document.getElementById("js-css-code");

        this.ranges = {
            grayscale: { elem: "js-filter-greyscale-range", unit: "%" },
            blur: { elem: "js-filter-blur", unit: "px" },
            brightness: { elem: "js-filter-brightness", unit: "" },
            contrast: { elem: "js-filter-contrast", unit: "" },
            saturate: { elem: "js-filter-saturate", unit: "" },
            "hue-rotate": { elem: "js-filter-hue-rotate", unit: "deg" },
            invert: { elem: "js-filter-invert", unit: "" }
        };

        Object.keys(this.ranges).forEach(range => {
            this.ranges[range].elem = document.getElementById(this.ranges[range].elem);
        });

        this.appendListeners();
    }

    codeOutput() {
        this.code.innerText = `filter:${this.style};`;
    }

    /**
     * Gets keys from {this.ranges} and then append input event listener to every input type range,
     * also will set default value of range to 0 if range hasn't specified attribute data-value
     */

    appendListeners() {
        Object.keys(this.ranges).forEach(range => {
            const rangeElement = this.ranges[range].elem;
            if (rangeElement) {
                const defaultValue = rangeElement.getAttribute("data-value");
                rangeElement.value = defaultValue ? defaultValue : 0;
                rangeElement.addEventListener("input", () => {
                    this.container.style.filter = this.style;
                    this.codeOutput();
                });
            }
        });
        this.codeOutput();
    }

    /**
     * Gets keys from {this.ranges} and concatenate
     * key (representing css property) + element.value + unit
     * to temporary variable style and once it's done, returns it.
     * @returns {string}
     */

    get style() {
        let style = "";
        Object.keys(this.ranges).forEach(range => {
            const rangeProperty = this.ranges[range];
            if (rangeProperty.elem) {
                style += ` ${range}(${rangeProperty.elem.value + rangeProperty.unit})`;
            }
            else {
                console.warn(`Failed to get value from ${rangeProperty.elem}`);
            }
        });

        return style;
    }
}