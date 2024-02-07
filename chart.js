const graphDiv = document.querySelector('.graph');

// function fetchData() {
//     fetch('./data.json')
//     .then((res) => {
//         if (!res.ok) {
//             throw new Error(`HTTP error! Status: ${res.status}`);
//         }
//         return res.json();
//     })
//     .catch((err) => {
//         console.error("Unable to fetch data:", error);
//     });
// }

const fetchData = async () => {
    try {
        const response = await fetch('./data.json');
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

const data = await fetchData();

// const ul = document.createElement('div');
// const li = document.createElement('p')
// li.innerHTML = data[0].day + data[0].amount;

ul.appendChild(li);
graphDiv.appendChild(ul);
