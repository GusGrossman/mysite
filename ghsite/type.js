const typefaceTag = document.querySelector('select[name="typeface"]')
// when I chang my select for typface, updat the font family
typefaceTag.addEventListener("input", function(){
	outputTag.style.fontFamily = this.value
})
