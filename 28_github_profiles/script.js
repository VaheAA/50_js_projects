const API_URL = 'https://api.github.com/users/';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

async function getUser(username) {
    try {
        const { data } = await axios(API_URL + username);

        createUserCard(data);
    } catch (err) {
        console.log(err);
    }

}


function createUserCard(user) {
    const cardHtml = `
    <div class="card">
            <div>
                <img class="avatar" src="${user.avatar_url}" alt="avatar">
            </div>
            <div class="user-info">
                <h2>${user.login}</h2>
                <p>${user.bio}</p>
                <ul>
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>
                <div id="repos"></div>
            </div>
        </div>
    `;

    main.innerHTML = cardHtml;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = search.value;

    if (user) {
        getUser(user);

        search.value = '';
    }
});