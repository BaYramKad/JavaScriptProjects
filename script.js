let body = document.querySelector("body");
const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}
DomElement.prototype.block = function() {
    if (this.selector[0] === "."){
        body.innerHTML = "<div></div>";
        let div = document.querySelector("div");
        div.classList.add("block");
        div.textContent = "Класс";
        div.style.color = "white";
        div.style.height = this.height;
        div.style.width = this.width;
        div.style.backgroundColor = this.bg;
        div.style.fontSize = this.fontSize;
    } else if (this.selector[0] === "#"){
        body.innerHTML = "<p></p>";
        let p = document.querySelector("p");    
        p.id = "best";
        p.style.width = this.width;
        p.style.height = this.height;
        p.style.backgroundColor = this.bg;
        p.style.fontSize = this.fontSize;
        p.textContent = "Айди";
        p.style.color = "white";
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