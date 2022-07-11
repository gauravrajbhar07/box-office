const API_BASE_URI = "https://api.tvmaze.com";


export async function apiGet(queryString) {

    const response = await fetch(`${API_BASE_URI}${queryString}`).then(r => r.json());
    return response;


}