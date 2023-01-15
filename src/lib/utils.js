import axios from 'axios';

export function formatPrice(price) {
    if (price < 1000) {
        return price.toString();
    }
    const thousands = Math.floor(price / 1000);
    const singles = price % 1000;
    return `${thousands} ${singles}`;
}

export function formatPriceRange(priceArr, sign) {
    return priceArr.map((price) => `${formatPrice(price)} ${sign}`).join(" – ")
}

export function formatPriceRangeTwoPlaces(priceArr, sign) {
    return priceArr.map((price) => `${formatPrice(price.toFixed(2))} ${sign}`).join(" – ")
}

export function formatItemCount(count) {
    const remainder100 = count % 100;
    let suffix;
    if (remainder100 === 0) {
        suffix = "товаров"
    } else if (remainder100 === 1) {
        suffix = "товар";
    } else if (remainder100 >= 2 && remainder100 <= 4) {
        suffix = "товара";
    } else if (remainder100 >= 5 && remainder100 <= 20) {
        suffix = "товаров";
    } else {
        const remainder10 = count % 10;
        if (remainder10 === 1) {
            suffix = "товар"
        } else if (remainder10 >= 2 && remainder10 <= 4) {
            suffix = "товара"
        } else {
            suffix = "товаров";
        }
    }
    return `${count} ${suffix}`
}

export function postOrder(frontendItems, installation) {
    const orderItems = frontendItems.map((item) => ({
        // should put item id instead of vendorCode here, but it's unknown :(
        // id: item.id
        vendorCode: item.vendorCode,
        count: item.count,
    }));
    return axios.post('/order', {
        items: orderItems,
        installation
    });
}
