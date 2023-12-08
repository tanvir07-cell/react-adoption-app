const fetchPet = async ({ queryKey }) => {
  const [_, id] = queryKey;
  const res = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  return res.json();
};

export default fetchPet;
