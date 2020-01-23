
export const getPosts = () => (
  fetch(
    'http://localhost:8080/posts',
    {
      method: 'GET',
    }
  )
)

export const createPost = (data) => (
  fetch(
    'https://jsonplaceholder.typicode.com/posts',
    {
      method: 'POST',
      body: JSON.stringify({
        title: data.title,
        body: data.body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8;"
      }
    }
  )
)
