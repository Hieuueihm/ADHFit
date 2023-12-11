import { getItem, removeItem, storeItem } from "./AsyncStorage";
import { showToast, toastConfig } from "./ToastMessage";

export default utils = {
    AsyncStorage: {
        removeItem,
        getItem,
        storeItem
    },
    Toast: {
        showToast,
        toastConfig

    }
}