// 在 navbar.html 中
	var navbarHeight = document.querySelector('.daohang').offsetHeight;
	window.parent.postMessage({ type: 'navbarHeight', height: navbarHeight }, '*');