(async function main() {
  const postURL = 'https://reqres.in/api/users';
  const payload = { name: 'Jane Doe', job: 'Developer' };

  try {
    const postResponse = await fetch(postURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1',
      },
      body: JSON.stringify(payload),
    });
    console.log('POST HTTP', postResponse.status, postResponse.statusText);
    const postData = await postResponse.json();
    console.log('POST Response JSON:', postData);
  } catch (error) {
    console.error('POST Fetch error:', error);
  }
})();