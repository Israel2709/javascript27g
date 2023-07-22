export default {
  getKoders: async () => {
    let response = await fetch(
      "https://javascript27g-default-rtdb.firebaseio.com/koders/.json"
    );
    let data = await response.json();
    return data;
  },
  createKoder: async (newKoder) => {
    let response = await fetch(
      "https://javascript27g-default-rtdb.firebaseio.com/koders/.json",
      {
        method: "POST",
        body: JSON.stringify(newKoder),
      }
    );
    let data = await response.json();
    return data;
  },
  getKoderById: async (koderId) => {
    let response = await fetch(
      `https://javascript27g-default-rtdb.firebaseio.com/koders/${koderId}.json`
    );
    let data = await response.json();
    console.log(data);
    return data;
  },
};
