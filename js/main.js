const target = document.getElementById('topmenu__menubar');
target.addEventListener('click',function(){
	target.classList.toggle('action');
	const nav = document.getElementById('nav')
	nav.classList.toggle('in');
});