/**
 * Cria um slice com uma função assíncrona
 * @param {String} key
 * @param {Object} initial
 */

function getLocalStorage(key, initial) {
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch {
    return initial;
  }
}

export default getLocalStorage;
