import sendRequest from "./send-request";

const BASE_URL = '/api/orders'

export function getCart() {
    return sendRequest(`${BASE_URL}/cart`)
}

export function addItemToCart(itemId) {
    return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST' )
}

export function setItemQty(itemid, newQty) {
    return sendRequest(`${BASE_URL}/cart/qty`, 'PUT' , { itemid, newQty })
}

export function submitOrder() {
    return sendRequest(`${BASE_URL}/cart/confirmation`, 'POST' )
}

export function setRemoveItem(itemId) {
    return sendRequest(`${BASE_URL}/cart/remove/${itemId}`, 'DELETE')
}