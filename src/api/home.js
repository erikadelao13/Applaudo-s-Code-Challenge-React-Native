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
export const searcherByPage = async (url) => {
    return await dispatchRequest({
        method: 'get',
        url,
    }, false);
}
export const getSeriesEpisodes = async (type, id) => {
    return await dispatchRequest({
        method: 'get',
        url: `/${type}/${id}/episodes?page%5Blimit%5D=10&page%5Boffset%5D=0`,
    }, false)
}
export const getEpisodesByPage = async (url) => {
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