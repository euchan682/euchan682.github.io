(function(){
	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = $('.modalmatt');
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");
	img.on('click', (evt)=>{
	    modal.style.display = "block";
	    modalImg.src = evt.target.src;
	    captionText.innerHTML = $(evt.target).attr('caption');
	})

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	  modal.style.display = "none";
	}
	$(modalImg).on('click', (evt)=>{
		evt.stopPropagation();
	})
	$(modal).on('click', ()=>{
		modal.style.display = "none";
	})
})();