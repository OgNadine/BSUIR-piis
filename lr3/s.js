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

        shirtDiv.innerHTML = 
            `<img src="${imageSrc}" alt="${shirt.name}">
            <h3>${shirt.name}</h3>
            <p>${shirt.price}</p>
            <button class="quickView" 
             data-name="${shirt.name}" 
             data-description="${shirt.description}" 
             data-price="${shirt.price}" 
             data-image="${imageSrc}" 
             data-image-back="${imageBack}">Quick View</button>
            <button class="seePage">See page</button>`;
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
    
    shirtContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('quickView')) {
            const { name, description, price, image, imageBack } = e.target.dataset;
            modalName.textContent = name;
            modalDescription.textContent = description;
            modalPrice.textContent = price;
            modalImage.src = image;
            modalImageBack.src = imageBack;
            modal.style.display = 'flex';
        }
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });