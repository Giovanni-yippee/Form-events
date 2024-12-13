document.getElementById('select').addEventListener('change', function() {
    console.log('Таңдалған топ:', this.value);
});

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const comment = document.getElementById('comment').value;
    const rating = document.getElementById('rating').value;
    const group = document.getElementById('select').value;
    const messageElement = document.getElementById('message');

    if (comment.length > 15) {
        messageElement.textContent = 'Пікір 15 символдан аспауы керек!';
        messageElement.style.color = 'red';
        return;
      }

      messageElement.textContent = 'Форма сәтті жіберілді!';
      messageElement.style.color = 'green';
 
      console.log('Таңдалған топ:', group);
      console.log('Пікір:', comment);
      console.log('Бағалау:', rating);
});

document.getElementById('rating').addEventListener('input', function() {
    const ratingValueElement = document.getElementById('ratingValue');
    ratingValueElement.textContent = this.value;
});