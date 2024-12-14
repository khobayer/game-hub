import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'f6ddbe687b3a419b90b6cec09f0756f1'
    }
})