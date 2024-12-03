const slider = document.querySelector('.slider');
const sliderHandle = document.querySelector('.slider-handle');
const afterImage = document.querySelector('.slider-container .after');
const beforeLabel = document.querySelector('.before-label');
const afterLabel = document.querySelector('.after-label');
const container = document.querySelector('.slider-container');

sliderHandle.addEventListener('mousedown', (e) => {
  const onMove = (e) => {
    const bounds = container.getBoundingClientRect();
    const offset = Math.min(Math.max(e.clientX - bounds.left, 0), bounds.width);
    const percentage = offset / bounds.width * 100;

    slider.style.left = `${percentage}%`;
    sliderHandle.style.left = `${percentage}%`;
    afterImage.style.clipPath = `inset(0 0 0 ${percentage}%)`;

    // Adjust label visibility based on slider position
    beforeLabel.style.opacity = percentage > 40 ? 1 : 0;
    afterLabel.style.opacity = percentage < 60 ? 1 : 0;
  };

  const onMouseUp = () => {
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  document.addEventListener('mousemove', onMove);
  document.addEventListener('mouseup', onMouseUp);
});