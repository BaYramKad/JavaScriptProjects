document.addEventListener("DOMContentLoaded", function() {
    const body = document.querySelector("body");
    body.innerHTML = "<div></div>";
    const div = document.querySelector("div");
    body.style.width = "100%";
    body.style.height = "100%";
    const DomElement = function () {
        this.height = "200px";
        this.width = "200px";
        this.bg = "#000";
        this.fontSize = "20px";
    };
    
    DomElement.prototype.block = function() {
        div.classList.add("block");
        div.textContent = "Класс";
        div.style.color = "white";
        div.style.height = this.height;
        div.style.width = this.width;
        div.style.backgroundColor = this.bg;
        div.style.fontSize = this.fontSize;
        div.style.fontFamily = "Ruso One, sans-serif";
        div.style.textAlign = "center";
        div.style.position = "absolute";
    };
    const block = new DomElement();
    function foo(callback){
        DomElement.call(this, arguments);
        callback();
        
        document.addEventListener("keydown", function (event){
            let key = event.key;
            console.log('key: ', key);
            if (key === "ArrowUp"){
                div.style.transform = "translateY(-10)";
            } else if (key === "ArrowDown"){
                div.style.transform = "translateY(10px)";
            } else if (key === "ArrowRight"){
                div.style.transform = "translateX(10px)";
            } else if (key === "ArrowLeft"){
                div.style.transform = "translateX(-10px)";
            }
            callback();
        });
    }
    foo(block.block);
});