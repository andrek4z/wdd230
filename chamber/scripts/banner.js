const banner = document.getElementById('banner');

const closeButton = document.getElementById('close-banner');

const today = new Date().getDay();

if (today === 1 || today === 2 || today === 3) 
{
  banner.style.display = 'block';
}

closeButton.addEventListener('click', () => 
{
  banner.style.display = 'none';
});