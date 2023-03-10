window.onload = () => {
  
  // nyawa pemain
  const limit = 3;
  let heart = limit;
  
  function guessNumber() {
    // generate angka acak mulai dari angka 1 sampai 10
    return getRandomNumber(1, 10);
  }
  
  let result = guessNumber();
  
  function getRandomNumber(min, max) {
    // generate angka acak
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  const text = document.querySelector('.text');
  const input = document.querySelector('.input');
  const submitButton = document.querySelector('.btn-submit');
  submitButton.addEventListener('click', () => {
    // value input
    const value = input.value.trim();
    // validasi
    if (validate(value) == true) {
      // bandingkan jawaban pemain dan jawaban aslinya
      const check = setGames(value, result);
      // jika variabel check menghasilkan boolean true, beritahu sisa dari nyawa pemain
      if (check == true) alert(`your heart : ${heart} times again!`);
      // jika nyawa pemain sudah habis
      if (heart == 0) {
        // tampilkan pesan
        alert(`Game Over! the correct answer is ${result}`);
        // apakah pemain mau main lagi
        again();
      }
      // hapus value input
      input.value = '';
    }
  });
  
  function validate(value) {
    // jika input kosong
    if (!value) return alert('field is empty!');
    // jika input berisi sebuah huruf
    if (value.match(/[a-zA-Z]/gmi)) return alert('only number!');
    // jika berhasil melewati semua validasi
    return true;
  }
  
  function setGames(value, result) {
    // jika jawaban pemain lebih rendah dari jawaban aslinya
    if (value < result) {
      // tampilkan pesan
      alert('too short! please try again!');
      // kurangi jumlah nyawa pemain
      heart--;
      /*
        mengembalikan nilai berupa boolean true guna untuk
        memberikan trigger kepada variabel check
      */
      return true;
    }
    // jika jawaban pemain lebih besar dari jawaban aslinya
    if (value > result) {
      // tampilkan pesan
      alert('too much! please try again!');
      // kurangi jumlah nyawa pemain
      heart--;
      /*
        mengembalikan nilai berupa boolean true guna untuk
        memberikan trigger kepada variabel check
      */
      return true;
    }
    // jika jawaban pemain sama dengan jawaban aslinya
    if (value == result) {
      // set text dengan jawaban aslinya
      text.textContent = result;
      // tampilkan pesan
      alert(`Congratulation! the correct answer is ${value}`);
      // apakah pemain mau main lagi
      again();
    }
  }
  
  function again() {
    // jika pemain menekan tombol ok atau yes
    const ask = confirm('do you want to play again?');
    if (ask == true) {
      // tampilkan pesan
      alert(`let's play again!`);
      // bersihkan 
      clear();
      // load soal baru
      result = guessNumber();
    } else {
      // jika pemain menekan tombol no atau cancel
      alert('thanks for playing with us!');
      // matikan fungsi tombol
      submitButton.setAttribute('disabled', true);
    }
  }
  
  function clear() {
    // reset isi text
    text.textContent = '?';
    // reset nyawa pemain
    heart = limit;
  }
  
}