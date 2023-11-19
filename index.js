registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const userData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        dob: document.getElementById('dob').value,
        terms: document.getElementById('terms').checked
    };

    if (!validateUserData(userData)) {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Date of birth must correspond to an age between 18 and 55.';
        errorMessage.classList.add('error-message');
        const dateField = document.getElementById('dob');
        
        if (dateField.nextElementSibling && dateField.nextElementSibling.classList.contains('error-message')) {
            dateField.parentNode.removeChild(dateField.nextElementSibling);
        }
        
        dateField.parentNode.appendChild(errorMessage);
    } else {
        const dateField = document.getElementById('dob');
        if (dateField.nextElementSibling && dateField.nextElementSibling.classList.contains('error-message')) {
            dateField.parentNode.removeChild(dateField.nextElementSibling);
        }
        
        saveUserData(userData);
        updateUserDataTable(); 
        clearForm();
    }
});

function validateUserData(userData) {
    const minAge = 18;
    const maxAge = 55;

    const today = new Date();
    const birthDate = new Date(userData.dob);
    const age = today.getFullYear() - birthDate.getFullYear();

    // Calculate age precisely
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age >= minAge && age <= maxAge;
}

function updateUserDataTable() {
    // Retrieve user data list from localStorage
    const userList = JSON.parse(localStorage.getItem('userList')) || [];

    const userDataTable = document.getElementById('user-data');
    const userDataTableBody = userDataTable.querySelector('tbody');

    // Clear existing rows and headers in the table
    userDataTableBody.innerHTML = '';

    // Populate the table with the updated user data
    userList.forEach((userData) => {
        const userDataRow = createUserDataTableRow(userData);
        userDataTableBody.appendChild(userDataRow);
    });

    // Show the table if there is any user data
    if (userList.length > 0) {
        userDataTable.classList.remove('hidden');
    } else {
        userDataTable.classList.add('hidden');
    }
}

function createUserDataTableRow(userData) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${userData.name}</td>
        <td>${userData.email}</td>
        <td>${userData.password}</td>
        <td>${new Date(userData.dob).toLocaleDateString()}</td>
        <td>${userData.terms ? 'true' : 'false'}</td>
    `;
    return row;
}
