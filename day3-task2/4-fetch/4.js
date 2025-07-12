
function createCard(post, containerId) {
  const container = document.getElementById(containerId);
  const card = document.createElement('div');

  card.style.border = '1px solid #ccc';
  card.style.padding = '10px';
  card.style.margin = '10px';
  card.style.borderRadius = '5px';
  card.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
  
  card.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
  `;

  container.appendChild(card);

}


function fetchWithThen(limit) {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
      const posts = data.slice(0, limit);
      posts.forEach((post) => {
        createCard(post, 'post_then');
      });
    })
    .catch((error) => {
      console.error('Error (then):', error);
    });
}


// ------------------------------------


async function fetchWithAsync(limit) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    const posts = data.slice(0, limit);

    posts.forEach((post) => {
      createCard(post, 'post_async');
    });
  } catch (error) {
    console.error('Error (async/await):', error);
  }
}

fetchWithThen(5);
fetchWithAsync(5);














// fetch('https://jsonplaceholder.typicode.com/posts/9')
