const btn = document.querySelector('.slider');
// Отслеживаем щелчок по кнопке
btn.addEventListener('click', function() {
  // Затем переключаем (добавляем/удаляем) класс .dark-theme для body
  let welcome = document.querySelector('.welcome')
  welcome.classList.toggle('dark-theme'); 
  console.log('efwsefw')
})