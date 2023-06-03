const defaultValue = 10;
const router = window.location.pathname;
let currentPage = 0;
let itemsPerPage = 10;

const url = `https://marketplace-3lqw.onrender.com/api/stores?limit=${defaultValue}`;
const paginatedFrame = document.getElementById('paginated-main');
if (window.Promise) {
    if (navigator.onLine) {
        var promise = new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();
            paginatedFrame.appendChild(loadTime());
            request.open('GET', url);
            request.onload = function () {
                if (request.status == 200) {
                    resolve(request.response);
                } else {
                    paginatedFrame.innerHTML = `
                        <div class="not-found">
                            <h5>Oh no!, something's wrong ${request.statusText}</h5>
                        </div>
                    `;
                    reject(Error(request.statusText));
                }
            };
            request.onerror = function () {
                paginatedFrame.innerHTML = `
                    <div class="not-found">
                        <h5>Error fetching data</h5>
                    </div>
                `;
                reject(Error('Error fetching data.'));
            };
            request.send();
        });

        promise.then(function (data) {
            paginatedFrame.innerHTML = '';
            const jsonData = JSON.parse(data);
            const paginatedHeader = createPaginatedHeader();
            const listItemRow = createListItemRow(jsonData);
            paginatedFrame.appendChild(paginatedHeader);
            paginatedFrame.appendChild(listItemRow);
        }).catch(function (error) {
            console.log('Promise rejected.');
        });
    } else {
        paginatedFrame.innerHTML = `
            <div class="not-found">
                <h5>Oh no, it looks like you don't have an internet connection!</h5>
            </div>
        `;
    }
} else {
    console.log('Promise not available');
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
    console.log(data)
    const listItemRow = document.createElement('div');
    listItemRow.className = 'paginated-row grid-container';

    data.forEach((element) => {
        const anchor = document.createElement('a');
        anchor.className = 'router-item';
        anchor.href = `/pages/storeDetail/detail.html?id=${element._id}`;

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


function loadTime() {
    const setElement = document.createElement('div')
    setElement.setAttribute('class', `div-load`)
    return setElement
}