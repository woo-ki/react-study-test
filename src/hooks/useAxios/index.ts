import {JsonData, jsonData} from "./json";


type Sections = {
    json: JsonData
}

type SectionKeys = keyof Sections;
export const useAxios = <S extends SectionKeys>(section: S): Sections[S] => {
    const sections: Sections = {
        json: jsonData
    }
    return sections[section];
}
