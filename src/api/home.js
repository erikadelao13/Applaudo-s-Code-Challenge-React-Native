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
    })
}
export const getGenres = async () => {
    return await dispatchRequest({
        method: 'get',
        url: `/genres/`,
    })
}
export const showGenresByPage = async url => {
    return await dispatchRequest({
      method: 'get',
      url,
    });
};
export const getDataByCategory = async (type, categoryName) => {
    return await dispatchRequest({
        method: 'get',
        url: `/${type}?filter[genres]=${categoryName}`,
    })
}
export const showDataByCategoryPage = async url => {
    return await dispatchRequest({
      method: 'get',
      url,
    });
};
// export const getQuestion = async (data = {}) =>
//     dispatchRequest({
//         method: "post",
//         url: "api/web/questions",
//         data
//     });