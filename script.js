// Hàm lấy thời gian hiện tại và hiển thị bằng ảnh
function updateTime() {
  const now = new Date();
  const days = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  displayTime('days', days);
  displayTime('hours', hours);
  displayTime('minutes', minutes);
  displayTime('seconds', seconds);
}
// Hàm hiển thị số giờ, phút, giây bằng ảnh
function displayTime(elementId, timeString) {
  const element = document.getElementById(elementId);
  element.innerHTML = ''; // Xóa các ảnh cũ
  for (let char of timeString) {
    const img = document.createElement('img');
    img.src = `${char}.png`;
    element.appendChild(img);
  }
}
// Cập nhật thời gian mỗi giây
setInterval(updateTime, 1000);
// Gọi hàm cập nhật thời gian ngay khi trang được load
updateTime();
