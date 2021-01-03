document.getElementById('btn_1').addEventListener('click', getAjax);
document.getElementById('btn_2').addEventListener('click', getAjaxx);

function getAjax() {

    const xhr = new XMLHttpRequest();

    xhr.onload = function () {

        if (this.status === 200) {
            document.querySelector('.res').innerHTML = `<div id="result">"Wiadomość została wysłana!"</div>`;
        } else {
            document.querySelector('.res').innerHTML = `<div id="result">Coś poszło nie tak, kod odpowiedzi: ${this.status}</div>`;
        }
    }

    xhr.open('POST', 'question.php', true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send();
}

function getAjaxx() {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {

        if (this.status === 200) {
            document.querySelector('.res').innerHTML = `<div id="result">"Wiadomość została wysłana!"</div>`;
        } else {
            document.querySelector('.res').innerHTML = `<div id="result">Coś poszło nie tak, kod odpowiedzi: ${this.status}</div>`;
        }
    }

    xhr.open('POST', 'question.php', true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send();
}