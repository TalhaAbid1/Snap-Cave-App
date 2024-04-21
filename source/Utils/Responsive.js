import { Dimensions } from "react-native";
const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window')
export const wp = (widthGiven) => {
    return (widthGiven * deviceWidth) / 100;
}
export const hp = (heightGiven) => {
    return (heightGiven * deviceHeight) / 100;
}