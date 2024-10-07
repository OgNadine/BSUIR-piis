const shirtContainer = document.getElementById('shirtContainer');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal');
    const modalName = document.getElementById('modalName');
    const modalDescription = document.getElementById('modalDescription');
    const modalPrice = document.getElementById('modalPrice');
    const modalImage = document.getElementById('modalImage');
    const modalImageBack = document.getElementById('modalImageBack');

    shirts.forEach(shirt => {
        const shirtDiv = document.createElement('div');
        shirtDiv.className = 'shirt';

        const imageSrc = getImageSrc(shirt);
        const imageBack= getImageBackSrc(shirt);

        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = shirt.name;
        shirtDiv.appendChild(img);

        const h3 = document.createElement('h3');
        h3.textContent = shirt.name;
        shirtDiv.appendChild(h3);

        const p = document.createElement('p');
        p.textContent = shirt.price;
        shirtDiv.appendChild(p);

        const buttonQuickView = document.createElement('button');
        buttonQuickView.className = 'quickView';
        buttonQuickView.dataset.name = shirt.name;
        buttonQuickView.dataset.description = shirt.description;
        buttonQuickView.dataset.price = shirt.price;
        buttonQuickView.dataset.image = imageSrc;
        buttonQuickView.dataset.imageBack = imageBack;
        buttonQuickView.textContent = 'Quick View';
        shirtDiv.appendChild(buttonQuickView);

        const buttonSeePage = document.createElement('button');
        buttonSeePage.className = 'seePage';
        buttonSeePage.textContent = 'See page';
        shirtDiv.appendChild(buttonSeePage);

        buttonQuickView.addEventListener('click', () => {
            modalName.textContent = shirt.name;
            modalDescription.textContent = shirt.description;
            modalPrice.textContent = shirt.price;
            modalImage.src = imageSrc;
            modalImageBack.src = imageBack;
            modal.style.display = 'flex';
        });

        buttonSeePage.addEventListener('click', () => {
            localStorage.setItem('selectedShirt', JSON.stringify(shirt));
            window.location.href = 'details.html';
        });

        shirtContainer.appendChild(shirtDiv);
    });

    function getImageSrc(shirt) {
        if (shirt.colors && Object.values(shirt.colors).length > 0) {
            return shirt.colors.white.front;
        }
        return shirt.default.front;
    }
    
    function getImageBackSrc(shirt) {
        if (shirt.colors && Object.values(shirt.colors).length > 0) {
            return shirt.colors.white.back;
        }
        return shirt.default.back;
    }

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });