const buttonClick = () => {

    document.getElementById("loader").style.display = "block"

    const searchBox = document.getElementById("search-field").value;

    setTimeout(() => {
        loadingTime(false, searchBox)
    }, 3000);

}

buttonClick()

const loadingTime = async (trueParameter, searchParameter) => {
    console.log(trueParameter, searchParameter)

    document.getElementById("loader").style.display = "none"

    const fetchUrl = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchParameter ? searchParameter : 'iphone'}`);

    const response = await fetchUrl.json();

    if (trueParameter) {
        searchInput(response.data)
    }
    else {
        searchInput(response.data.slice(0, 6)) // এখানে slice(0, 6) লিখাতে 0 থেকে 6 পর্যন্ত ডাটা গুলো দেখাবে
    }
}


const searchInput = (arrayData) => {
    // console.log(arrayData)
    const parentCard = document.getElementById("phones-container");
    parentCard.innerHTML = ""
    arrayData.forEach(arrayItem => {
        const { image, phone_name, brand, slug } = arrayItem;
        console.log(arrayItem)
        const childCard = document.createElement("div")
        childCard.innerHTML = `
            <div class="card p-4">
                <img src="${image}" class="card-img-top" alt="Image">
                    <div class="card-body">
                        <h5 class="card-title">${phone_name}</h5>
                        <span>${brand}</span>
                        <p class="card-text">${slug}</p>
                        <button href="#" class="btn btn-primary" onclick="phoneDetails()"
                            data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details</button>

                    </div>
            </div>`
        parentCard.appendChild(childCard)
    });
}


const showAllButton = () => {
    loadingTime(true)
}


const phoneDetails = () => {
console.log("Details Now")
}
