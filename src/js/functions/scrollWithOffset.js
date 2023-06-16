export default function scrollToWithOffset(element, offset = 80) {
	element.scrollIntoView(true);

	if(window.scrollY){
		window.scroll(0, window.scrollY - offset);
	}
}