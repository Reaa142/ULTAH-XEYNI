const surpriseButton = document.getElementById('surpriseButton');
const hiddenMessage = document.getElementById('hiddenMessage');

surpriseButton.addEventListener('click', () => {
	const isVisible = hiddenMessage.classList.toggle('show');
	surpriseButton.innerHTML = isVisible ? 'Pesan terbuka <span>♡</span>' : 'Buka kejutan <span>✦</span>';
	surpriseButton.setAttribute('aria-expanded', String(isVisible));
});
