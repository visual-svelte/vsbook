export function accordion(node, isOpen) {
	let initialHeight = node.offsetHeight;
	node.style.height = isOpen ? 'auto' : 0;
	node.style.overflow = 'hidden';
	return {
		update(isOpen) {
			let animation = node.animate(
				[
					{
						height: initialHeight + 'px',
						opacity: 1,
						overflow: 'hidden'
					},
					{
						height: 0,
						opacity: 0,
						overflow: 'hidden'
					}
				],
				{ duration: 500, fill: 'both' }
			);
			animation.pause();
			if (!isOpen) {
				animation.play();
			} else {
				animation.reverse();
			}
		}
	};
}
