const host = "https://skypro-music-api.skyeng.tech/";
let url = "";
export async function getPlaylist() {
  url = "catalog/track/all/";
  return fetch(host + url, {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else throw new Error();
    })
    .then((json) => json);
}

export async function loginUser({ email, password }) {
  url = "user/login/";
  return fetch(host + url, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    if (response.status === 401) {
      throw new Error("Пользователь с таким email или паролем не найден");
    }
    throw new Error("Ошибка,попробуйте заново...");
  });
}

export async function registerUser({ email, password }) {
  url = "user/signup/";
  return fetch(host + url, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
      username: email,
    }),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => {
    if (response.status === 201) {
      return response.json();
    }
    if (response.status === 400) {
      throw new Error("Пользователь с таким именем уже существует");
    }
    throw new Error("Ошибка,поробуйте заново...");
  });
}
