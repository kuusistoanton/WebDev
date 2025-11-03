(async function main() {
  const getURL = 'https://reqres.in/api/unknown/23';
  try {
    const getResponse = await fetch(getURL, {
      headers: { 'x-api-key': 'reqres-free-v1' },
    });
    if (!getResponse.ok) {
      throw new Error(`GET ${getURL} failed: ${getResponse.status} ${getResponse.statusText}`);
    }
    const getData = await getResponse.json();
    console.log('GET Response JSON:', getData);
  } catch (error) {
    console.error('GET Fetch error:', error);
  }
})();