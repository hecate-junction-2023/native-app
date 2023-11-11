import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import DateHeaderSimplePositonCe from "./DateHeaderSimplePositonCe";
import DayWorkDayModeLight from "./DayWorkDayModeLight";
import DateTodayModeLight from "./DateTodayModeLight";
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";

const DateForm = () => {
  return (
    <View style={styles.datePicker}>
      <DateHeaderSimplePositonCe
        month="April"
        dimensionLabel={require("../assets/chevron3.png")}
        year="2023"
        imageLabel={require("../assets/chevron3.png")}
        dateHeaderSimplePositonCePosition="unset"
      />
      <View style={[styles.workDayParent, styles.ctasFlexBox]}>
        <DayWorkDayModeLight
          text="Sun"
          dayWorkDayModeLightPosition="unset"
          thColor="#f36a6a"
        />
        <DayWorkDayModeLight
          text="Mon"
          dayWorkDayModeLightPosition="unset"
          thColor="#121212"
        />
        <DayWorkDayModeLight
          text="Tue"
          dayWorkDayModeLightPosition="unset"
          thColor="#121212"
        />
        <DayWorkDayModeLight
          text="Wed"
          dayWorkDayModeLightPosition="unset"
          thColor="#121212"
        />
        <DayWorkDayModeLight
          text="Thu"
          dayWorkDayModeLightPosition="unset"
          thColor="#121212"
        />
        <DayWorkDayModeLight
          text="Fri"
          dayWorkDayModeLightPosition="unset"
          thColor="#121212"
        />
        <DayWorkDayModeLight
          text="Sat"
          dayWorkDayModeLightPosition="unset"
          thColor="#f36a6a"
        />
      </View>
      <View style={styles.frameParent}>
        <View
          style={[styles.calendarDateParent, styles.calendarParentPosition]}
        >
          <View style={styles.calendarDate}>
            <Text style={styles.text}>23</Text>
          </View>
          <View style={styles.calendarDate}>
            <Text style={styles.text}>23</Text>
          </View>
          <View style={styles.calendarDate}>
            <Text style={styles.text}>23</Text>
          </View>
          <View style={styles.calendarDate}>
            <Text style={styles.text}>23</Text>
          </View>
          <DateTodayModeLight
            dateText="1"
            carId={require("../assets/ellipse-11.png")}
            eventDay={false}
            textFontWeight="unset"
            textFontFamily="Inter-Regular"
            textColor="#858585"
          />
          <DateTodayModeLight
            dateText="2"
            carId={require("../assets/ellipse-12.png")}
            eventDay={false}
            textFontWeight="unset"
            textFontFamily="Inter-Regular"
            textColor="#858585"
          />
          <DateTodayModeLight
            dateText="3"
            carId={require("../assets/ellipse-13.png")}
            eventDay={false}
            textFontWeight="unset"
            textFontFamily="Inter-Regular"
            textColor="#858585"
          />
        </View>
        <View style={[styles.calendarDateGroup, styles.calendarParentPosition]}>
          <DateTodayModeLight
            dateText="4"
            carId={require("../assets/ellipse-1.png")}
            eventDay={false}
            textFontWeight="unset"
            textFontFamily="Inter-Regular"
            textColor="rgba(60, 60, 60, 0.5)"
          />
          <DateTodayModeLight
            dateText="5"
            carId={require("../assets/ellipse-14.png")}
            eventDay={false}
            textFontWeight="unset"
            textFontFamily="Inter-Regular"
            textColor="#858585"
          />
          <DateTodayModeLight
            dateText="6"
            carId={require("../assets/ellipse-15.png")}
            eventDay={false}
            textFontWeight="unset"
            textFontFamily="Inter-Regular"
            textColor="#858585"
          />
          <DateTodayModeLight
            dateText="7"
            carId={require("../assets/ellipse-16.png")}
            eventDay={false}
            textFontWeight="unset"
            textFontFamily="Inter-Regular"
            textColor="#858585"
          />
          <DateTodayModeLight
            dateText="8"
            carId={require("../assets/ellipse-11.png")}
            eventDay={false}
            textFontWeight="unset"
            textFontFamily="Inter-Regular"
            textColor="#858585"
          />
          <DateTodayModeLight
            dateText="9"
            carId={require("../assets/ellipse-12.png")}
            eventDay={false}
            textFontWeight="unset"
            textFontFamily="Inter-Regular"
            textColor="#858585"
          />
          <DateTodayModeLight
            dateText="10"
            carId={require("../assets/ellipse-13.png")}
            eventDay={false}
            textFontWeight="unset"
            textFontFamily="Inter-Regular"
            textColor="rgba(60, 60, 60, 0.5)"
          />
        </View>
        <View
          style={[styles.calendarDateContainer, styles.calendarParentPosition]}
        >
          <DateTodayModeLight
            dateText="11"
            carId={require("../assets/ellipse-1.png")}
            eventDay={false}
            textFontWeight="unset"
            textFontFamily="Inter-Regular"
            textColor="rgba(60, 60, 60, 0.5)"
          />
          <DateTodayModeLight
            dateText="23"
            carId={require("../assets/ellipse-14.png")}
            eventDay={false}
            textFontWeight="unset"
            textFontFamily="Inter-Regular"
            textColor="#858585"
          />
          <DateTodayModeLight
            dateText="13"
            carId={require("../assets/ellipse-15.png")}
            eventDay={false}
            textFontWeight="unset"
            textFontFamily="Inter-Regular"
            textColor="#858585"
          />
          <DateTodayModeLight
            dateText="14"
            carId={require("../assets/ellipse-16.png")}
            eventDay={false}
            textFontWeight="unset"
            textFontFamily="Inter-Regular"
            textColor="#858585"
          />
          <DateTodayModeLight
            dateText="15"
            carId={require("../assets/ellipse-11.png")}
            eventDay={false}
            dateTodayModeLightBorderRadius={1000}
            textFontWeight="600"
            textFontFamily="Inter-SemiBold"
            textColor="#58a8f2"
          />
          <DateTodayModeLight
            dateText="16"
            carId={require("../assets/ellipse-12.png")}
            eventDay={false}
            textFontWeight="unset"
            textFontFamily="Inter-Regular"
            textColor="#858585"
          />
          <DateTodayModeLight
            dateText="17"
            carId={require("../assets/ellipse-13.png")}
            eventDay={false}
            textFontWeight="unset"
            textFontFamily="Inter-Regular"
            textColor="#858585"
          />
        </View>
        <View style={[styles.frameView, styles.calendarParentPosition]}>
          <DateTodayModeLight
            dateText="18"
            carId={require("../assets/ellipse-1.png")}
            eventDay={false}
            textFontWeight="unset"
            textFontFamily="Inter-Regular"
            textColor="#858585"
          />
          <DateTodayModeLight
            dateText="19"
            carId={require("../assets/ellipse-14.png")}
            eventDay={false}
            textFontWeight="unset"
            textFontFamily="Inter-Regular"
            textColor="#858585"
          />
          <DateTodayModeLight
            dateText="20"
            carId={require("../assets/ellipse-15.png")}
            eventDay={false}
            textFontWeight="unset"
            textFontFamily="Inter-Regular"
            textColor="#858585"
          />
          <DateTodayModeLight
            dateText="21"
            carId={require("../assets/ellipse-16.png")}
            eventDay={false}
            textFontWeight="unset"
            textFontFamily="Inter-Regular"
            textColor="#858585"
          />
          <DateTodayModeLight
            dateText="22"
            carId={require("../assets/ellipse-11.png")}
            eventDay={false}
            textFontWeight="unset"
            textFontFamily="Inter-Regular"
            textColor="#858585"
          />
          <DateTodayModeLight
            dateText="23"
            carId={require("../assets/ellipse-12.png")}
            eventDay={false}
            textFontWeight="unset"
            textFontFamily="Inter-Regular"
            textColor="#858585"
          />
          <DateTodayModeLight
            dateText="24"
            carId={require("../assets/ellipse-13.png")}
            eventDay={false}
            textFontWeight="unset"
            textFontFamily="Inter-Regular"
            textColor="#858585"
          />
        </View>
        <View
          style={[styles.calendarDateParent1, styles.calendarParentPosition]}
        >
          <DateTodayModeLight
            dateText="25"
            carId={require("../assets/ellipse-1.png")}
            eventDay={false}
            textFontWeight="unset"
            textFontFamily="Inter-Regular"
            textColor="rgba(60, 60, 60, 0.5)"
          />
          <DateTodayModeLight
            dateText="26"
            carId={require("../assets/ellipse-14.png")}
            eventDay={false}
            textFontWeight="unset"
            textFontFamily="Inter-Regular"
            textColor="#858585"
          />
          <DateTodayModeLight
            dateText="27"
            carId={require("../assets/ellipse-15.png")}
            eventDay={false}
            textFontWeight="unset"
            textFontFamily="Inter-Regular"
            textColor="#858585"
          />
          <DateTodayModeLight
            dateText="28"
            carId={require("../assets/ellipse-16.png")}
            eventDay={false}
            textFontWeight="unset"
            textFontFamily="Inter-Regular"
            textColor="#858585"
          />
          <DateTodayModeLight
            dateText="29"
            carId={require("../assets/ellipse-11.png")}
            eventDay={false}
            textFontWeight="unset"
            textFontFamily="Inter-Regular"
            textColor="#858585"
          />
          <DateTodayModeLight
            dateText="30"
            carId={require("../assets/ellipse-12.png")}
            eventDay={false}
            textFontWeight="unset"
            textFontFamily="Inter-Regular"
            textColor="#858585"
          />
          <View style={styles.calendarDate}>
            <Text style={styles.text}>23</Text>
          </View>
        </View>
      </View>
      <View style={[styles.ctas, styles.ctasFlexBox]}>
        <View style={styles.buttonsFlexBox}>
          <Text style={[styles.button, styles.buttonTypo]}>Action 1</Text>
        </View>
        <View style={[styles.buttons1, styles.buttonsFlexBox]}>
          <Text style={[styles.button1, styles.buttonTypo]}>Action 2</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ctasFlexBox: {
    flexDirection: "row",
    marginTop: 20,
  },
  calendarParentPosition: {
    width: 267,
    left: 0,
    flexDirection: "row",
    position: "absolute",
  },
  buttonTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    lineHeight: 16,
    fontSize: FontSize.inputS_size,
  },
  buttonsFlexBox: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_9xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  workDayParent: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  text: {
    color: Color.colorBlack,
    textAlign: "left",
    height: 16,
    display: "none",
    fontFamily: FontFamily.interRegular,
    lineHeight: 16,
    fontSize: FontSize.inputS_size,
    flex: 1,
  },
  calendarDate: {
    height: 32,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  calendarDateParent: {
    top: 0,
  },
  calendarDateGroup: {
    top: 36,
  },
  calendarDateContainer: {
    top: 72,
  },
  frameView: {
    top: 108,
  },
  calendarDateParent1: {
    top: 144,
  },
  frameParent: {
    height: 176,
    marginTop: 20,
    alignSelf: "stretch",
  },
  button: {
    color: Color.primaryBlue,
  },
  button1: {
    color: Color.neutral0,
  },
  buttons1: {
    backgroundColor: Color.primaryBlue,
    marginLeft: 16,
  },
  ctas: {
    display: "none",
    marginTop: 20,
  },
  datePicker: {
    top: 52,
    left: 1,
    borderRadius: Border.br_2xs,
    backgroundColor: Color.neutral0,
    shadowColor: "rgba(0, 0, 0, 0.07)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 14,
    elevation: 14,
    shadowOpacity: 1,
    width: 307,
    height: 332,
    alignItems: "flex-end",
    padding: Padding.p_xl,
    position: "absolute",
  },
});

export default DateForm;
