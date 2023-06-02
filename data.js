const defaultValue = 10;
const router = window.location.pathname;
let currentPage = 0;
let itemsPerPage = 10;

document.addEventListener("DOMContentLoaded", function () {
    getData();
});

async function getData() {
    try {
        const response = await fetch(`https://marketplace-3lqw.onrender.com/api/stores?limit=${defaultValue}`);
        const dataRes = await response.json();
        const fetchData = [...dataRes];

        const paginatedFrame = document.getElementById('paginated-main');
        const paginatedHeader = createPaginatedHeader();
        const listItemRow = createListItemRow(fetchData);

        paginatedFrame.appendChild(paginatedHeader);
        paginatedFrame.appendChild(listItemRow);
    } catch (error) {
        console.log(error);
    }
}

function createPaginatedHeader() {
    const paginatedHeader = document.createElement('div');
    paginatedHeader.className = 'paginated-row paginated-header';

    for (let i = 0; i < 2; i++) {
        const paginatedItem = document.createElement('div');
        paginatedItem.className = 'paginated-item';
        paginatedItem.innerHTML = `
            <span class='item-name'>
                Name
            </span>
            <span class='item-3'>
                Quantity
            </span>
            <span class='item-3'>
                Date created
            </span>
        `;
        paginatedHeader.appendChild(paginatedItem);
    }

    return paginatedHeader;
}

function createListItemRow(data) {
    const listItemRow = document.createElement('div');
    listItemRow.className = 'paginated-row grid-container';

    const html = data.map((element) => {
        return `
            <a class="router-item">
                <div class='paginated-item items'>
                    <div class='item-name'>
                        <div class='class-img'>
                            <span class='span-frame'>
                                <img class='img-avatar' alt='' src='${element.storeAvatar}' />
                            </span>
                        </div>
                        <span class='item-name-store'>${element.storeName}</span>
                    </div>
                    <span class='item-3'>
                        ${element.storeProductLength}
                    </span>
                    <span class='item-3'>
                        ${element.date}
                    </span>
                </div>
                <div class='line'></div>
            </a>`;
    });

    listItemRow.innerHTML = html.join("");

    return listItemRow;
}
