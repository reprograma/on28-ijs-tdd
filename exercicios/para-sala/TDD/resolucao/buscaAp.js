function buildApartamentTags(isShared) {
	if (isShared) {
		return {
			icon: "shared",
			color: "green",
			background: "gray",
			label: "Compartilhado",
		};
	} else {
		return {
			icon: "not-shared",
			color: "blue",
			background: "black",
			label: "Individual",
		};
	}
}

module.exports = buildApartamentTags;
