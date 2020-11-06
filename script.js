let body = document.querySelector("body");
body.innerHTML = "<div></div>";
let div = document.querySelector("div");
console.log('div: ', div);

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}
DomElement.prototype.block = function () {
    if (this.selector[0] === "."){
        div.classList.add("block");
        div.textContent = "Класс";
        div.style.color = "white";
        div.style.height = this.height;
        div.style.width = this.width;
        div.style.backgroundColor = this.bg;
        div.style.fontSize = this.fontSize;
    } else if (this.selector[0] === "#"){
        div.id = "best";
        div.style.width = this.width;
        div.style.height = this.height;
        div.style.backgroundColor = this.bg;
        div.style.fontSize = this.fontSize;
        div.textContent = "Айди";
        div.style.color = "white";
    }
};
let block = new DomElement();
const Element = function (selector, height, width, bg, fontSize) {
    DomElement.call(this, arguments);
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.block();
};

Element.prototype = Object.create(DomElement.prototype);

let elem = new Element("#23432s", "100px", "100px", "#000", "14px");
DomElement.prototype.constructor = Element;