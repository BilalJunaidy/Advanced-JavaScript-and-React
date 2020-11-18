function gettext(id) {
    fetch(`sections/${id}`)
    .then(function(response) {
        return response.text())
    }
    .then(function(text) {
        document.querySelector('#content').innerHTML = text;
    });
    };

    document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll('button').forEach(function(button) {
            button.onclick = function() {
                gettext(this.dataset.id);
            };
        });
    });
