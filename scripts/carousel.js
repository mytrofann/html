const photos = [
    {
        id: 1,
        imageUrl: 'img/salad.jpeg',
        alt: 'Salad'
    },
    {
        id: 2,
        imageUrl: 'img/serving-tartare.jpeg',
        alt: 'Serving tartare'
    },
    {
        id: 3,
        imageUrl: 'img/steak-with-vegetables.jpeg',
        alt: 'Steak with vegetables'
    },
    {
        id: 4,
        imageUrl: 'img/tom-yum.jpeg',
        alt: 'Tom yum'
    },
    {
        id: 5,
        imageUrl: 'img/people-drink-wine.jpeg',
        alt: 'People drink wine'
    },
    {
        id: 6,
        imageUrl: 'img/rolls.jpeg',
        alt: 'Rolls'
    },
    {
        id: 7,
        imageUrl: 'img/steak-serving.jpeg',
        alt: 'Steak serving'
    },
    {
        id: 8,
        imageUrl: 'img/glass.jpeg',
        alt: 'Glass'
    }
];

let currentIndex = 0;

function renderPhotos(startIndex) {
    // Wrap the photo list so that the first and last photos are adjacent
    const wrappedPhotos = [...photos, ...photos.slice(0, startIndex)];

    let photosHtml = '';
    for (let i = startIndex; i < startIndex + 8; i++) {
        const photo = wrappedPhotos[i];
        photosHtml += `
        <li class="carousel__item">
                <img class="carousel__img" src="${photo.imageUrl}" alt="${photo.alt}">
            </li>`;
    }
    document.querySelector('.carousel__list').innerHTML = photosHtml;
}

function scrollPhotos(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % photos.length;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    }
    renderPhotos(currentIndex);
}

document.querySelector('.carousel__button-prev').addEventListener('click', () => {
    scrollPhotos('prev');
});

document.querySelector('.carousel__button-next').addEventListener('click', () => {
    scrollPhotos('next');
});

// Render the initial set of photos
renderPhotos(currentIndex);