/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

//Step 4
//select cards from html
const cardsDiv = document.querySelector('.cards');

function getUserInfo(usernameInfo){
  axios.get(`https://api.github.com/users/${usernameInfo}`)
  .then((response) => {
    //console.log(response);
    //Step 4
    const newCard = makeCard(response);
    cardsDiv.appendChild(newCard);
  })
  .catch((error) => {
    console.log(error)
  })
}

//create card for myself
getUserInfo('KirstenS13');

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  'ArianaShackelford',
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
  'dryanmas'
];

followersArray.forEach((githubHandle) => {
  getUserInfo(githubHandle);
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function makeCard(dataObj){
  //outer div
  const card = document.createElement('div');
  card.classList.add('card');

  //user's image
  const userImg = document.createElement('img');
  userImg.src = dataObj.data.avatar_url;

  //inner div
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  //name of user
  const name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = dataObj.data.name;

  //username of user
  const username = document.createElement('p');
  username.classList.add('username');
  username.textContent = dataObj.data.login;

  //location
  const location = document.createElement('p');
  location.textContent = `Location: ${dataObj.data.location}`;

  //profile container
  const profile = document.createElement('p');
  profile.textContent = `Profile: `;

  //profile link
  const profileURL = document.createElement('a');
  profileURL.href = dataObj.data.url;
  profileURL.textContent = dataObj.data.url;

  //number of followers
  const followers = document.createElement('p');
  followers.textContent = `Followers: ${dataObj.data.followers}`;

  //number following
  const following = document.createElement('p');
  following.textContent = `Following: ${dataObj.data.following}`;

  //bio
  const bio = document.createElement('p');
  bio.textContent = `Bio: ${dataObj.data.bio}`;

  //append everything correctly
  profile.appendChild(profileURL);

  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  card.appendChild(userImg);
  card.appendChild(cardInfo);

  //return card
  return card;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
