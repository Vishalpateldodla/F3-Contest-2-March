const button = document.querySelector('#fetch-data-btn');
const tableBody = document.querySelector('tbody');

function promiseAPI1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch('https://dummyjson.com/posts')
        .then((response) => response.json())
        .then((data) => {
          data = data.posts; // Access the array inside the object
          data.forEach((item) => {
            const row = document.createElement('tr');
            const idCell = document.createElement('td');
            const titleCell = document.createElement('td');
            const bodyCell = document.createElement('td');
            idCell.textContent = item.id;
            titleCell.textContent = item.title;
            bodyCell.textContent = item.body;
            row.appendChild(idCell);
            row.appendChild(titleCell);
            row.appendChild(bodyCell);
            tableBody.appendChild(row);
          });
          resolve(true);
        })
        .catch((error) => {
          console.error('Error fetching API1:', error);
          resolve(false);
        });
    }, 1000);
  });
}

function promiseAPI2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch('https://dummyjson.com/products')
        .then((response) => response.json())
        .then((data) => {
          data = data.products; // Access the array inside the object
          data.forEach((item) => {
            const row = document.createElement('tr');
            const idCell = document.createElement('td');
            const nameCell = document.createElement('td');
            const priceCell = document.createElement('td');
            idCell.textContent = item.id;
            nameCell.textContent = item.name;
            priceCell.textContent = item.price;
            row.appendChild(idCell);
            row.appendChild(nameCell);
            row.appendChild(priceCell);
            tableBody.appendChild(row);
          });
          resolve(true);
        })
        .catch((error) => {
          console.error('Error fetching API2:', error);
          resolve(false);
        });
    }, 2000);
  });
}

function promiseAPI3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch('https://dummyjson.com/todos')
        .then((response) => response.json())
        .then((data) => {
          data = data.todos; // Access the array inside the object
          data.forEach((item) => {
            const row = document.createElement('tr');
            const idCell = document.createElement('td');
            const titleCell = document.createElement('td');
            const completedCell = document.createElement('td');
            idCell.textContent = item.id;
            titleCell.textContent = item.title;
            completedCell.textContent = item.completed ? 'Yes' : 'No';
            row.appendChild(idCell);
            row.appendChild(titleCell);
            row.appendChild(completedCell);
            tableBody.appendChild(row);
          });
          resolve(true);
        })
        .catch((error) => {
          console.error('Error fetching API3:', error);
          resolve(false);
        });
    }, 3000);
  });
}

button.addEventListener('click', () => {
    tableBody.innerHTML = '';
    promiseAPI1()
      .then((result) => {
        if (result) {
          return promiseAPI2();
        }
      })
      .then((result) => {
        if (result) {
          return promiseAPI3();
        }
      })
      .then(() => {
        console.log('API data successfully fetched');
      })
      .catch((error) => {
        console.error('Error fetching API data:', error);
      });
  });
  
  
  
  
  
