// JS for edit post function
async function editFormHandler(event) {
    event.preventDefault();
  
    // Listing for clicking title input
    const title = document.querySelector('input[name="post-title"]').value.trim();
    // Listening for posting content 
    const post_contents = document.querySelector('input[name="post-contents"]').value.trim();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        post_contents
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  // Listening for Edit post btn 
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);