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
        document.addEventListener("keydown", keyDownfunc, false);
        function keyDownfunc(event){
            const div = document.querySelector("div");
            var cs = window.getComputedStyle(div);
            var left = parseInt(cs.transform);
            var top = parseInt(cs.transform);
            var right = parseInt(cs.transform);
            var down = parseInt(cs.transform);
            let key = event.which;
            console.log('key: ', key);
            if (event.which === 40 || left > 0){
                div.style.transform = 10 + "px";
            } 
            if (event.which === 38 || top > 0){
                div.style.transform = 10 + "px";
            } 
            if (event.which === 39 || right > 0){
                div.style.transform = 10 + "px";
            } 
            if (event.which === 37 || down > 0){
                div.style.transform = 10 + "px";
            }
        };
    }
    foo(block.block);
});
