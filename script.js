fetch('data.xml')
    .then(response => response.text())
    .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    .then(data => {
        const users = data.getElementsByTagName('user');
        let html = '<ul>';
        for (let i = 0; i < users.length; i++) {
            let name = users[i].getElementsByTagName('name')[0].textContent;
            let email = users[i].getElementsByTagName('email')[0].textContent;
            html += `<li><strong>${name}</strong> (${email})</li>`;
        }
        html += '</ul>';
        document.getElementById('data-container').innerHTML = html;
    })
    .catch(err => {
        document.getElementById('data-container').innerText = 'Failed to load data.';
        console.error('XML fetch error:', err);
    });
