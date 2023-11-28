import { fetchLocations, fetchWeatherForecast } from "./WeatherAPI";
import {
    userGetCaptcha, userLogin, userLoginFacebook, handleGetUserInformation, handleEditInformation, handleUpdateTarget,
    handleUpdateReceiveNotification, handleLogout, handleDeleteTarget
} from "./UserAPI";
import { handleSetCurrentLog } from './LogAPI'
import { handleGetStateData, handleGetAllStateData } from './StateAPI'
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

    },
    LogAPI: {
        handleSetCurrentLog

    },
    StateAPI: {
        handleGetStateData,
        handleGetAllStateData
    }
}