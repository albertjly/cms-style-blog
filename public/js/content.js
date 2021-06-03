async function contentFormHandler(event) {
  event.preventDefault();

  const content_text = document.querySelector('textarea[name="post-content"]').value.trim();
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (content_text) {
    const response = await fetch('/api/contents', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        user_id,
        content_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.post-content').addEventListener('submit', contentFormHandler);
