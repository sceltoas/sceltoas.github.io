import React from 'react';

import img1 from '../images/background1.jpg';
import img2 from '../images/background2.jpg';
import img3 from '../images/background4.jpg';
import img4 from '../images/bicycle_sea.jpeg';
import img5 from '../images/city-panorama.jpeg';
import img6 from '../images/drinker.jpeg';

const images = [
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
	img3,
	img4,
	img5,
	img6,
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
	img3,
	img4,
	img5,
	img6,
];

const TiledBackground = () => (
	<div className="tiled-background">
		{images.map(image => (
			<img className="image"
			     src={image} aria-label="Image"/>
		))}
	</div>
);

export const AltTiledBackground = () => {
	const columns = Math.round(images.length / 4);
	let columnIndex = 0;

	const columnizedImages = [];
	let currentColumn = [];

	images.forEach((image, index) => {
		if (columnIndex < columns - 1) {
			currentColumn.push(image);
			columnIndex++;

		} else if (columnIndex === columns - 1) {
			columnizedImages.push(currentColumn);
			columnIndex = 0;
			currentColumn = [];
		}
	});


	const tmp = columnizedImages.map((column) => {
		return (
			<div className="column-erik">
				{column.map((image, index) => (
					<img
						src={image}
						aria-label="Image"
					/>
				))}
			</div>
		);
	});

	return (
		<div className="tiled-background ">
			{tmp.map(item => (
				<div className="row-erik">
					{item}
				</div>
			))}
		</div>
	);
};


export default AltTiledBackground;
