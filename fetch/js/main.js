const getKoders = async () => {
  let response = await fetch(
    "https://javascript27g-default-rtdb.firebaseio.com/koders/.json"
  );
  let data = await response.json();
  console.log(response);
  console.log(data);
  return data;
};
getKoders();

const createKoder = async (newKoder) => {
  let response = await fetch(
    "https://javascript27g-default-rtdb.firebaseio.com/koders/.json",
    {
      method: "POST",
      body: JSON.stringify(newKoder),
    }
  );
  let data = await response.json();
  return data;
};

const getKoderById = async (koderId) => {
  let response = await fetch(
    `https://javascript27g-default-rtdb.firebaseio.com/koders/${koderId}.json`
  );
  let data = await response.json();
  console.log(data);
  return data;
};

const createNewCollection = async (collectionName) => {
  let response = await fetch(
    `https://javascript27g-default-rtdb.firebaseio.com/${collectionName}.json`,
    {
      method: "PUT",
      body: JSON.stringify({ name: "objeto de prueba" }),
    }
  );
  let data = await response.json();
  console.log(data);
  return data;
};
