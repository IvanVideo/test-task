class Api {
    baseUrl: string;
    apiKey: string;
    constructor(baseUrl: string, apiKey: string) {
        this.baseUrl = baseUrl;
        this.apiKey = apiKey;
    }

    getBooks(value: String) {
        return fetch(`${this.baseUrl}`+value+`&key=${this.apiKey}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => {
            return res.ok
                ? res.json()
                : Promise.reject(
                    new Error(`Ошибка ${res.status} : ${res.statusText}`)
                );
        });
    }
}

let baseUrl = "https://www.googleapis.com/books/v1/volumes?q=";
let apiKey = "AIzaSyBDQCUnMeuqv_QxXuWhk3oXJQ0ujc-bTuY";

const booksApi = new Api(baseUrl, apiKey);
export default booksApi;