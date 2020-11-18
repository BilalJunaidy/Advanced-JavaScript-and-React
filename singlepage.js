function SinglePage(Page) {
    document.querySelectorAll('div').forEach(function(div) {
        div.style.display = none;
    })
    document.querySelector(`#${Page}`).style.display = block;
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('button').forEach(function(button) {
        button.onclick = function() {
            document.querySelector(`#${this.dataset.Page}`).style.display = block;
        }
    })
})