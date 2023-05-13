import axios, {AxiosRequestConfig, Method} from "axios";

type OptionType = {
    excel?: boolean;
    multipart?: boolean;
    externalUrl?: boolean;
    hideLoading?: boolean;
}
type AxiosOptionType<T> = AxiosRequestConfig<T>;
type OptionConvertType<T> = (url: string, axiosOption: AxiosOptionType<T>, option: OptionType) => void

const DOMAIN = "http://localhost:5174/";

const paramToUrl = (param: Record<string, unknown> = {}) => {
    let array: string[] = [];
    Object.keys(param).forEach(key => {
        array.push(`${key}=${param[key]}`);
    });
    return array.join("&");
};

const optionConvert: OptionConvertType<unknown> = (url, axiosOption, option) => {
    if (option?.excel) {
        axiosOption.responseType = "arraybuffer";
    }
    if (option?.multipart) {
        axiosOption.headers = {};
        axiosOption.headers["Content-Type"] = "multipart/form-data";
    }

    axiosOption.url = option?.externalUrl ? url : DOMAIN + url;
};

type ReturnType<T> = {
    result_code: number;
    result_data: T;
    result_msg: string;
}

export type DataReturn<T> = ReturnType<T | null>;

export async function api<T>(method: Method, url: string, data: Record<string, unknown>, option: OptionType): Promise<ReturnType<T | null>> {
    // 3초 지연
    await new Promise(resolve => setTimeout(resolve, 3000));
    const axiosOption = {
        method,
        data,
        timeout: 15000,
        options: { withCredentials: true },
    };

    if (method === "get") {
        const paramUrl = paramToUrl(data);
        url = `${url}?${paramUrl}`;
    }
    optionConvert(url, axiosOption, option);
    return axios<T>(axiosOption)
        .then((result): DataReturn<T> => {
            const random = Math.floor(Math.random() * 3);
            if (random === 1) {
                throw new Error();
            }
            return {
                result_code: 200,
                result_data: result.data,
                result_msg: "데이터 호출에 성공했습니다."
            };
        })
        .catch((error): DataReturn<null> => {
            if (error.response?.data?.result_code === 401) {
                return {
                    result_code: 401,
                    result_data: null,
                    result_msg: error.response.data,
                };
            } else {
                return {
                    result_code: 404,
                    result_data: null,
                    result_msg: "데이터 호출에 실패했습니다.",
                };
            }
        })
}
