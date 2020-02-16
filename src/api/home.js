//custom
import { dispatchRequest } from '.';
export const getAnime = async () => {
    return await dispatchRequest({
        method: 'get',
        url: `/anime/`,
    })
}
export const getCategories = async () => {
    return await dispatchRequest({
        method: 'get',
        url: `/categories/`,
    }, false)
}
export const getGenres = async () => {
    return await dispatchRequest({
        method: 'get',
        url: `/genres/`,
    }, false)
}
export const showGenresByPage = async url => {
    return await dispatchRequest({
        method: 'get',
        url,
    }, false);
};
export const getDataByCategory = async (type, categoryName) => {
    return await dispatchRequest({
        method: 'get',
        url: `/${type}?filter[genres]=${categoryName}`,
    }, false)
}
export const showDataByCategoryPage = async url => {
    return await dispatchRequest({
        method: 'get',
        url,
    }, false);
};
export const searcher = async (type, text) => {
    return await dispatchRequest({
        method: 'get',
        url: `/${type}?filter[text]=${text}`,
    }, false)
}
export const searcherByPage = async (type, text) => {
    return await dispatchRequest({
        method: 'get',
        url,
    }, false);
}
// export const getQuestion = async (data = {}) =>
//     dispatchRequest({
//         method: "post",
//         url: "api/web/questions",
//         data
//     });