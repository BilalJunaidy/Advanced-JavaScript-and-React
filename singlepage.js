function ShowPage(Page) {
    document.querySelectorAll('div').forEach(function(div) {
        div.style.display = 'none';
    });
    document.querySelector(`#${Page}`).style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('button').forEach(function(button) {
        button.onclick = function() {
            ShowPage(this.dataset.Page);
        }
    })
});