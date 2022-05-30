// JS for adding a post 
async function newFormHandler(event) {
    event.preventDefault();

    // Post title
    const title = document.querySelector('input[name="post-title"]').value;
    // Posting content 
    const post_contents = document.querySelector('input[name="post-contents"]').value;
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_contents
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
// Submit
  document.querySelector('.new-post-form').addEventListener('submit',newFormHandler);