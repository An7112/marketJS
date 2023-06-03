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
        const dataRes = await response.json() ?? [];
        const fetchData = [...dataRes];

        const paginatedFrame = document.getElementById('paginated-main');
        const paginatedHeader = createPaginatedHeader();
        const listItemRow = createListItemRow(fetchData);
        var divLoad = document.createElement('div')
        divLoad.className = 'div-load'
        paginatedFrame.appendChild(paginatedHeader);
        if(Array.isArray(dataRes) && dataRes.length > 0){
            paginatedFrame.appendChild(listItemRow);
        }else{
            paginatedFrame.appendChild(divLoad)
        }
        
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

    data.forEach((element) => {
        const anchor = document.createElement('a');
        anchor.className = 'router-item';
        anchor.href = `/detail.html?id=${element._id}`;

        const paginatedItem = document.createElement('div');
        paginatedItem.className = 'paginated-item items';

        const itemDiv = document.createElement('div');
        itemDiv.className = 'item-name';

        const classImg = document.createElement('div');
        classImg.className = 'class-img';

        const spanFrame = document.createElement('span');
        spanFrame.className = 'span-frame';

        const imgAvatar = document.createElement('img');
        imgAvatar.className = 'img-avatar';
        imgAvatar.alt = '';
        imgAvatar.src = element.storeAvatar;

        const itemNameStore = document.createElement('span');
        itemNameStore.className = 'item-name-store';
        itemNameStore.textContent = element.storeName;

        const itemQuantity = document.createElement('span');
        itemQuantity.className = 'item-3';
        itemQuantity.textContent = element.storeProductLength;

        const itemDate = document.createElement('span');
        itemDate.className = 'item-3';
        itemDate.textContent = element.date;

        itemDiv.appendChild(classImg);
        classImg.appendChild(spanFrame);
        spanFrame.appendChild(imgAvatar);
        itemDiv.appendChild(itemNameStore);
        paginatedItem.appendChild(itemDiv);
        paginatedItem.appendChild(itemQuantity);
        paginatedItem.appendChild(itemDate);
        anchor.appendChild(paginatedItem);

        listItemRow.appendChild(anchor);
    });

    return listItemRow;
}
