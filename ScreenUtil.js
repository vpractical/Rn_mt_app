import {
    Dimensions,
    Platform,
    PixelRatio
} from 'react-native';
//
const
screenW = Dimensions.get("window").width;
const
screenH = Dimensions.get('window').height;
//默认  1
const fontScale = PixelRatio.getFontScale();
//长度 1  单位    dpi

const pixelRatio = PixelRatio.get();

//基础屏幕属性
// const  defaultWidth=1080;
// const defautHeight = 1920;
//计算  iPhonex  iphone6
const  defaultWidth=375;
const  defautHeight = 667;
//缩放系数
const _scaleWidth = screenW / defaultWidth;
const _scaleHeight = screenH / defautHeight;

// iPhoneX
const X_WIDTH = 375;
const X_HEIGHT = 812;
export default class ScreenUtil {
    static scaleWidth(size) {
        return size * _scaleWidth;
    }

    static
    scaleHeight(size) {
        return size * _scaleHeight;
    }

    static setScakeText(size) {
        const scale = Math.min(_scaleWidth, _scaleHeight);
        return size * scale;
    }
    static
    isIphoneX() {

        return(
            Platform.OS === 'ios' &&
            ((screenH === X_HEIGHT && screenW === X_WIDTH) ||
                (screenH === X_WIDTH && screenW === X_HEIGHT))
        )
    }

}

//字体  横向 也没用纵向

