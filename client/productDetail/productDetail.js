// 찜 클릭시 하트 변경
let toggle = false;
function toggleLike() {
  document.getElementById('like').src = toggle ? './client/assets/icons/icon/redHeart.svg' : './client/assets/icons/icon/Heart.svg';
  toggle = !toggle;
}

// navbar 선택 is-active 클래스 탈부착
const items = document.querySelectorAll('.list');
items.forEach(item => {
  item.addEventListener('click', () => {
    items.forEach(e => {
      e.classList.remove('is-active');
    });
    item.classList.add('is-active');
  });
});

// 장바구니 클릭 시 상단에 버블 4초 띄우기
// const notification = document.getElementsByClassName('bubble-wrapper');
// const showNotification = () => {
//   notification.style.display = 'block';
//   setTimeout(() => {
//     notification.style.display = 'none';
//   }, 4000);
// };
