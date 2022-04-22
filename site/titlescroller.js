function titleScroller(minorChar, majorChar, titleLength) {
	const speed = 25;

	let currentPos = 0;
	let left = false;
	function inc() {
		if (left) {
			currentPos = Math.max(currentPos - 1, 1);
		} else {
			currentPos = Math.min(currentPos + 1, titleLength);
		}

		if (currentPos === 1 || currentPos === titleLength) {
			left = !left;
		}
		return currentPos;
	}

	function generateTitle(majorLoc) {
		let title = minorChar.repeat(majorLoc - 1) + majorChar;
		title += minorChar.repeat(titleLength - [...title].length);
		return title;
	}

	setInterval(function() {
		document.title = generateTitle(inc());
	}, speed);
}
