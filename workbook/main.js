window.addEventListener('DOMContentLoaded', async () => {
    const $valentines = document.querySelector('.valentines');
    const $valentinesBtn = document.querySelector(".valentines__button");

    const $removeBtn = document.querySelector('.remove__btn');

    //love student
    $valentinesBtn.addEventListener('click', (evt) => {
        const $p = document.createElement('p');
        $p.textContent = "My students are awesome";
        document.body.appendChild($p);
    });
    //remove btn
    $removeBtn.addEventListener('click', (evt)=> { 
        document.querySelector('.remove').remove();
    })

    const dogURL = "https://dog.ceo/api/breeds/image/random";
    const apiOptions = {method:"GET"};
    const dogImageUrl = await fetch(dogURL, apiOptions);
    const result = await dogImageUrl.json();

    const $img = document.createElement('img');
    $img.src = result.message;
    document.body.appendChild($img);
})