$(document).ready(function() {
    // Menyiapkan kotak teka-teki silang
    var k = 1;
    while (k <= 120) {
        $('#frame-tts').append(`<div class="box-kosong box-isi-${k} box-kosong"></div>`);
        k++;
    }

    for (var b = 9; b <= 69; b += 12) {
        if (b == 9) {
            $(`.box-isi-${b}`).replaceWith(`<div class="box-isi box-isi-${b}"><p class="no">1</p><p class="jwb jwb-${b}"></p></div>`);
        } else {
            $(`.box-isi-${b}`).replaceWith(`<div class="box-isi box-isi-${b}"><p class="jwb jwb-${b}"></p></div>`);
        }
    }

    for (var b = 18; b <= 24; b++) {
        $(`.box-isi-${b}`).replaceWith(`<div class="box-isi box-isi-${b}"><p class="jwb jwb-${b}"></p></div>`);
    }

    for (var b = 49; b <= 55; b++) {
        if (b == 49) {
            $(`.box-isi-${b}`).replaceWith(`<div class="box-isi box-isi-${b}"><p class="no">4</p><p class="jwb jwb-${b}"></p></div>`);
        } else {
            $(`.box-isi-${b}`).replaceWith(`<div class="box-isi box-isi-${b}"><p class="jwb jwb-${b}"></p></div>`);
        }
    }

    for (var b = 18; b <= 90; b += 12) {
        if (b == 18) {
            $(`.box-isi-${b}`).replaceWith(`<div class="box-isi box-isi-${b}"><p class="no">2</p><p class="jwb jwb-${b}"></p></div>`);
        } else {
            $(`.box-isi-${b}`).replaceWith(`<div class="box-isi box-isi-${b}"><p class="jwb jwb-${b}"></p></div>`);
        }
    }

    for (var b = 76; b <= 79; b++) {
        if (b == 76) {
            $(`.box-isi-${b}`).replaceWith(`<div class="box-isi box-isi-${b}"><p class="no">5</p><p class="jwb jwb-${b}"></p></div>`);
        } else {
            $(`.box-isi-${b}`).replaceWith(`<div class="box-isi box-isi-${b}"><p class="jwb jwb-${b}"></p></div>`);
        }
    }

    for (var b = 115; b <= 119; b++) {
        if (b == 115) {
            $(`.box-isi-${b}`).replaceWith(`<div class="box-isi box-isi-${b}"><p class="no">6</p><p class="jwb jwb-${b}"></p></div>`);
        } else {
            $(`.box-isi-${b}`).replaceWith(`<div class="box-isi box-isi-${b}"><p class="jwb jwb-${b}"></p></div>`);
        }
    }

    for (var b = 23; b <= 119; b += 12) {
        if (b == 23) {
            $(`.box-isi-${b}`).replaceWith(`<div class="box-isi box-isi-${b}"><p class="no">3</p><p class="jwb jwb-${b}"></p></div>`);
        } else {
            $(`.box-isi-${b}`).replaceWith(`<div class="box-isi box-isi-${b}"><p class="jwb jwb-${b}"></p></div>`);
        }
    }

    // Variabel untuk timer dan skor
    let score = 0;
    let time = 0;
    let timerInterval;

    // Fungsi untuk memulai timer
    function startTimer() {
        timerInterval = setInterval(() => {
            time++;
            const minutes = Math.floor(time / 60);
            const seconds = time % 60;
            $('#timer').text(`Waktu: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
        }, 1000);
    }

    // Mulai timer ketika permainan dimulai
    startTimer();

    $('#submit').click(function() {
        var options = document.getElementById("select").value;
        var answer1 = $('#input').val().toUpperCase();
        var array1 = answer1.split('');

        // Memperbarui skor
        function updateScore(points) {
            score += points;
            $('#score').text('Skor: ' + score);
        }

        // Memeriksa jawaban
        if (options == "1.Menurun") {
            if (answer1 == "TAKJIL") {
                alert('Keren! Jawabanmu tepat!');
                updateScore(10); // Tambahkan 10 poin
                for (var b = 9; b <= 69; b += 12) {
                    $(`.jwb-${b}`).text(array1.shift());
                }
            } else {
                alert('Ups, Jawabanmu kurang tepat. Silakan coba lagi!');
            }
        } else if (options == "2.Menurun") {
            if (answer1 == "TADARUS") {
                alert('Keren! Jawabanmu tepat!');
                updateScore(10);
                for (var b = 18; b <= 90; b += 12) {
                    $(`.jwb-${b}`).text(array1.shift());
                }
            } else {
                alert('Ups, Jawabanmu kurang tepat. Silakan coba lagi!');
            }
        } else if (options == "3.Menurun") {
            if (answer1 == "IDUL FITRI") {
                alert('Keren! Jawabanmu tepat!');
                updateScore(10);
                for (var b = 76; b <= 79; b++) {
                    $(`.jwb-${b}`).text(array1.shift());
                }
            } else {
                alert('Ups, Jawabanmu kurang tepat. Silakan coba lagi!');
            }
        } else if (options == "2.Mendatar") {
            if (answer1 == "SHOLAT TARAWIH") {
                alert('Keren! Jawabanmu tepat!');
                updateScore(10);
                for (var b = 49; b <= 55; b++) {
                    $(`.jwb-${b}`).text(array1.shift());
                }
            } else {
                alert('Ups, Jawabanmu kurang tepat. Silakan coba lagi!');
            }
        } else if (options == "4.Mendatar") {
            if (answer1 == "BULAN RAMADHAN") {
                alert('Keren! Jawabanmu tepat!');
                updateScore(10);
                for (var b = 23; b <= 119; b += 12) {
                    $(`.jwb-${b}`).text(array1.shift());
                }
            } else {
                alert('Ups, Jawabanmu kurang tepat. Silakan coba lagi!');
            }
        } else if (options == "5.Mendatar") {
            if (answer1 == "PUASA") {
                alert('Keren! Jawabanmu tepat!');
                updateScore(10);
                for (var b = 2; b <= 12; b++) {
                    $(`.jwb-${b}`).text(array1.shift());
                }
            } else {
                alert('Ups, Jawabanmu kurang tepat. Silakan coba lagi!');
            }
        } else if (options == "6.Mendatar") {
            if (answer1 == "SAHUR") {
                alert('Keren! Jawabanmu tepat!');
                updateScore(10);
                for (var b = 4; b <= 70; b += 12) {
                    $(`.jwb-${b}`).text(array1.shift());
                }
            } else {
                alert('Ups, Jawabanmu kurang tepat. Silakan coba lagi!');
            }
        }

        // Memeriksa jika semua jawaban benar untuk menghentikan timer
        // Gantilah kondisi ini dengan logika yang sesuai
        let allAnswersCorrect = false; // Atur logika untuk memeriksa jika semua jawaban benar
        if (allAnswersCorrect) {
            clearInterval(timerInterval);
            alert('Selamat! Waktu telah habis dan skor kamu: ' + score);
        }
    });
});
