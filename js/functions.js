const noppis = document.getElementById('dice');
const arpakuutio = document.getElementById('noppa');

        function heita() {
            const random = Math.floor(Math.random() * 6) + 1;
            arpakuutio.src = `./img/${random}.png`; 
        }
        noppis.addEventListener('click', heita);
    