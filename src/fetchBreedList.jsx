const fetchBreedList = async ({ queryKey }) => {
  const [, animal] = queryKey;

  if (!animal) return [];

  const res = await fetch(
    `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!res.ok) {
    throw new Error("An error occurred while fetching breed list.");
  }

  return res.json();
};

export default fetchBreedList;
