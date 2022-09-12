import axios from "axios";

export function createApiClient() {
  const instance = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(
    function (config) {
      // todo хранение токена
      const token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTkyNzg5MTAsImV4cCI6MTY1OTI4MjUxMCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidml0YWx5In0.ggCwtehtwfcIpA7JCrlLyOucFkTrb0nPS0sN_kz_VaHKiFLvGcJt_JE91bsujd3Tc84m1EqxX7o7iK59btmJZsoE-oXC7DoNu9btzTGT9Q0hSYaUP56UsT6-ffiy7cdPclDdQAI7Xy3VUyn_T7-B4Mf0VACZ0hD3jWHkA5JU4pmVjr6KAZra_vqreR6Xh0xQwW2xVTZo-ZRY8ksiDNUh3XuhfmRdaGhzU2zEmxj6ibgDosj4KU57QLN6d46vpRKRLXV905_mWwoejz2nz-GzLzq8b6KmTmpS4BCdaGlaR9AxFFgINDByz78MAMDieIz9RlOtL9S7YCUwBif-seJnRA";
      config.headers.Authorization = "Bearer " + token;
      return config;
    },
    function (error) {
      if (error.response) {
        if (error.response.status === 401 || error.response.status === 403) {
          // todo редирект на авторизацию (отдельная функция)
        }
      } else if (error.request) {
        // Запрос был сделан, но ответ не получен
        // `error.request`- это экземпляр XMLHttpRequest в браузере и экземпляр
        // http.ClientRequest в node.js
        console.log(error.request);
      } else {
        // Произошло что-то при настройке запроса, вызвавшее ошибку
        console.log("Error", error.message);
      }
      console.log(error.config);
    }
  );

  return instance;
}
