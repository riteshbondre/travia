
  export const fetchData = async () => {
    const endpoint = `https://jservice.io/api/random`;
    const data = await (await fetch(endpoint)).json();
    return data;
  };
