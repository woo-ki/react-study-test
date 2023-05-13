import {JsonData, jsonData} from "./json";


type Sections = {
    json: JsonData
}

// type SectionKeys = keyof Sections;
// type TypeKeys<K extends SectionKeys> = keyof Sections[K];
// export const useAxios = <S extends SectionKeys, T extends TypeKeys<S>>(section: S, type: T) => {
//     const sections = {
//         json: jsonData
//     }
//     return sections[section][type];
// }


type SectionKeys = keyof Sections;
export const useAxios = <S extends SectionKeys>(section: S): Sections[S] => {
    const sections: Sections = {
        json: jsonData
    }
    return sections[section];
}
