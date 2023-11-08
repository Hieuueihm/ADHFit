import { fetchLocations, fetchWeatherForecast } from "./WeatherAPI";
import {
    userGetCaptcha, userLogin, userLoginFacebook, handleGetUserInformation, handleEditInformation, handleUpdateTarget,
    handleUpdateReceiveNotification, handleLogout, handleDeleteTarget
} from "./UserAPI";
export default api = {
    WeatherAPI: {
        fetchLocations,
        fetchWeatherForecast
    },
    UserAPI: {
        userGetCaptcha,
        userLogin,
        userLoginFacebook,
        handleGetUserInformation,
        handleEditInformation,
        handleUpdateTarget,
        handleUpdateReceiveNotification,
        handleLogout,
        handleDeleteTarget

    }
}