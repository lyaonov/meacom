import {ref, computed} from "vue";
import {defineStore} from "pinia";

export const useCartStore = defineStore("cart", () => {
    const items = ref([{
        name: "Вытяжное устройство G2H",
        description: "12-72/168 м<sup>3</sup>/ч / гидрорегулируемый расход / от датчика присутствия",
        imageSrc: "/item1.png",
        vendorCode: "G2H1065",
        price: 12644,
        count: 1
    }, {
        name: "Вытяжное устройство BXC",
        description: "12-72/168 м<sup>3</sup>/ч / гидрорегулируемый расход / от датчика присутствия",
        imageSrc: "/item2.png",
        vendorCode: "G2H1065",
        price: 12644,
        count: 2
    }, {
        name: "Вытяжное устройство GHN",
        description: "12-72/168 м<sup>3</sup>/ч / гидрорегулируемый расход / от датчика присутствия",
        imageSrc: "/item3.png",
        vendorCode: "G2H1065",
        price: 12644,
        count: 1
    }]);
    const needInstallation = ref(false);

    const totalPrice = computed(() => Math.round(items.value.reduce((sum, curItem) => sum + curItem.count * curItem.price, 0)))
    const itemCount = computed(() => Math.round(items.value.reduce((sum, curItem) => sum + curItem.count, 0)))
    const cartLength = computed(() => items.value.length)

    function addItem(item) {
        items.value.push(item);
    }

    function removeItem(index) {
        items.value.splice(index, 1);
    }

    function setItemCount(index, count) {
        console.log(`count at ${index} is now ${count}`);
        items.value[index].count = count;
    }

    function clear() {
        items.value.splice(0)
    }

    function setNeedInstallation(status) {
        needInstallation.value = status;
    }

    return {
        items,
        needInstallation,
        totalPrice,
        itemCount,
        cartLength,
        addItem,
        removeItem,
        clear,
        setItemCount,
        setNeedInstallation
    };
});

export const useHistoryStore = defineStore("history", () => {
    const items = ref([{
        name: "BXC",
        description: "Вытяжное устройство для механической системы вентиляции",
        imageSrc: "/item2.png",
        priceRangeRub: [6848, 56584],
        priceRangeEuro: [77.60, 643.86],
    }, {
        name: "G2H",
        description: "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
        imageSrc: "/item1.png",
        priceRangeRub: [6848, 56584],
        priceRangeEuro: [77.60, 643.86],
    }, {
        name: "GHN",
        description: "Вытяжное устройство с датчиком присутствия",
        imageSrc: "/item3.png",
        priceRangeRub: [6848, 56584],
        priceRangeEuro: [77.60, 643.86],
    }, {
        name: "TDA",
        description: "Вытяжное устройство с датчиком присутствия",
        imageSrc: "/item4.png",
        priceRangeRub: [6848, 56584],
        priceRangeEuro: [77.60, 643.86],
    }, {
        name: "DFF",
        description: "KIOjgfriewogjiorewjgiroew",
        imageSrc: "/item1.png",
        priceRangeRub: [6848, 56584],
        priceRangeEuro: [77.60, 643.86],
    }, {
        name: "GRG",
        description: "Ogkprkgpregkpreogkrpeo",
        imageSrc: "/item3.png",
        priceRangeRub: [6848, 56584],
        priceRangeEuro: [77.60, 643.86],
    }, {
        name: "KOR",
        description: "Ggkreogkreogkrepogkreo",
        imageSrc: "/item4.png",
        priceRangeRub: [6848, 56584],
        priceRangeEuro: [77.60, 643.86],
    }, {
        name: "TDA",
        description: "Вытяжное устройство с датчиком присутствия",
        imageSrc: "/item4.png",
        priceRangeRub: [6848, 56584],
        priceRangeEuro: [77.60, 643.86],
    }, {
        name: "DFF",
        description: "KIOjgfriewogjiorewjgiroew",
        imageSrc: "/item2.png",
        priceRangeRub: [6848, 56584],
        priceRangeEuro: [77.60, 643.86],
    }, {
        name: "GRG",
        description: "Ogkprkgpregkpreogkrpeo",
        imageSrc: "/item1.png",
        priceRangeRub: [6848, 56584],
        priceRangeEuro: [77.60, 643.86],
    }, {
        name: "KOR",
        description: "Ggkreogkreogkrepogkreo",
        imageSrc: "/item3.png",
        priceRangeRub: [6848, 56584],
        priceRangeEuro: [77.60, 643.86],
    }, {
        name: "TDA",
        description: "Вытяжное устройство с датчиком присутствия",
        imageSrc: "/item4.png",
        priceRangeRub: [6848, 56584],
        priceRangeEuro: [77.60, 643.86],
    }, {
        name: "DFF",
        description: "KIOjgfriewogjiorewjgiroew",
        imageSrc: "/item1.png",
        priceRangeRub: [6848, 56584],
        priceRangeEuro: [77.60, 643.86],
    }, {
        name: "GRG",
        description: "Ogkprkgpregkpreogkrpeo",
        imageSrc: "/item4.png",
        priceRangeRub: [6848, 56584],
        priceRangeEuro: [77.60, 643.86],
    }, {
        name: "KOR",
        description: "Ggkreogkreogkrepogkreo",
        imageSrc: "/item4.png",
        priceRangeRub: [6848, 56584],
        priceRangeEuro: [77.60, 643.86],
    }, {
        name: "TDA",
        description: "Вытяжное устройство с датчиком присутствия",
        imageSrc: "/item1.png",
        priceRangeRub: [6848, 56584],
        priceRangeEuro: [77.60, 643.86],
    }, {
        name: "DFF",
        description: "KIOjgfriewogjiorewjgiroew",
        imageSrc: "/item1.png",
        priceRangeRub: [6848, 56584],
        priceRangeEuro: [77.60, 643.86],
    }, {
        name: "GRG",
        description: "Ogkprkgpregkpreogkrpeo",
        imageSrc: "/item2.png",
        priceRangeRub: [6848, 56584],
        priceRangeEuro: [77.60, 643.86],
    }, {
        name: "KOR",
        description: "Ggkreogkreogkrepogkreo",
        imageSrc: "/item4.png",
        priceRangeRub: [6848, 56584],
        priceRangeEuro: [77.60, 643.86],
    }, {
        name: "TDA",
        description: "Вытяжное устройство с датчиком присутствия",
        imageSrc: "/item1.png",
        priceRangeRub: [6848, 56584],
        priceRangeEuro: [77.60, 643.86],
    }, {
        name: "DFF",
        description: "KIOjgfriewogjiorewjgiroew",
        imageSrc: "/item2.png",
        priceRangeRub: [6848, 56584],
        priceRangeEuro: [77.60, 643.86],
    }, {
        name: "GRG",
        description: "Ogkprkgpregkpreogkrpeo",
        imageSrc: "/item3.png",
        priceRangeRub: [6848, 56584],
        priceRangeEuro: [77.60, 643.86],
    }, {
        name: "KOR",
        description: "Ggkreogkreogkrepogkreo",
        imageSrc: "/item4.png",
        priceRangeRub: [6848, 56584],
        priceRangeEuro: [77.60, 643.86],
    }]);



    return {
        items,
    };
});
