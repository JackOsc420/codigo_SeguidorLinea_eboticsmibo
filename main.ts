input.onButtonPressed(Button.A, function () {
    status = 1
    basic.showIcon(IconNames.Fabulous)
})
input.onButtonPressed(Button.B, function () {
    status = 0
    basic.showIcon(IconNames.Cow)
})
let status = 0
eboticsMIBO.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.forever(function () {
    if (status == 1) {
        if (eboticsMIBO.tracking(eboticsMIBO.TrackingStateType.Tracking_State_0)) {
            eboticsMIBO.forward()
        }
        if (eboticsMIBO.tracking(eboticsMIBO.TrackingStateType.Tracking_State_1)) {
            eboticsMIBO.freestyle(-50, 50)
        }
        if (eboticsMIBO.tracking(eboticsMIBO.TrackingStateType.Tracking_State_2)) {
            eboticsMIBO.freestyle(50, -50)
        }
        if (eboticsMIBO.tracking(eboticsMIBO.TrackingStateType.Tracking_State_3)) {
            eboticsMIBO.back()
        }
    } else {
        eboticsMIBO.brake()
    }
})
