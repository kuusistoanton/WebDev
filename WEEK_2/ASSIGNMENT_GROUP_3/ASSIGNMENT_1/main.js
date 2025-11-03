(async function main() {
  const requestURL = 'https://reqres.in/api/users/1';

  try {
    const response = await fetch(requestURL, {
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    });
    console.log('HTTP', response.status, response.statusText);
    const data = await response.json();
    console.log('Response JSON:', data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
})();