import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Color,
  FontSize,
  FontFamily,
  Padding,
  Border,
  StyleVariable,
} from "../GlobalStyles";

const Frame8 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.view}>
      <View style={styles.navigationBar}>
        <View style={styles.items}>
          <View style={[styles.blurEvenly, styles.buttonPosition]} />
          <View style={[styles.autoTint, styles.buttonPosition]} />
        </View>
      </View>
      <Text style={styles.scheduleTheCooking}>Schedule the cooking</Text>
      <Pressable
        style={styles.buttonWrapper}
        onPress={() => navigation.navigate("Frame11")}
      >
        <View style={[styles.button, styles.leftFlexBox]}>
          <Image
            style={[styles.folderIcon, styles.folderIconLayout]}
            contentFit="cover"
            source={require("../assets/folder.png")}
          />
          <Text style={styles.button1}>Next</Text>
          <Image
            style={[styles.folderIcon1, styles.folderIconLayout]}
            contentFit="cover"
            source={require("../assets/folder1.png")}
          />
        </View>
      </Pressable>
      <View style={styles.groupParent}>
        <Pressable
          style={[styles.rectangleParent, styles.groupChildPosition]}
          onPress={() => navigation.navigate("Frame7")}
        >
          <View style={[styles.groupChild, styles.groupChildShadowBox]} />
          <Text style={[styles.selectDate, styles.decemberTypo]}>
            Select Date
          </Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
        </Pressable>
        <View style={[styles.datePicker, styles.groupChildShadowBox]}>
          <View style={styles.dateHeader}>
            <Image
              style={styles.folderIconLayout}
              contentFit="cover"
              source={require("../assets/chevron.png")}
            />
            <View style={styles.year}>
              <View style={styles.year}>
                <Text style={[styles.december, styles.decemberTypo]}>
                  April
                </Text>
                <Image
                  style={[styles.chevronIcon1, styles.folderIconLayout]}
                  contentFit="cover"
                  source={require("../assets/chevron3.png")}
                />
              </View>
              <View style={styles.parent}>
                <Text style={[styles.december, styles.decemberTypo]}>2023</Text>
                <Image
                  style={[styles.chevronIcon2, styles.folderIconLayout]}
                  contentFit="cover"
                  source={require("../assets/chevron3.png")}
                />
              </View>
            </View>
            <Image
              style={styles.folderIconLayout}
              contentFit="cover"
              source={require("../assets/chevron2.png")}
            />
          </View>
          <View style={styles.workDayParent}>
            <View style={styles.workDay}>
              <Text style={[styles.th, styles.thTypo]}>Sun</Text>
            </View>
            <View style={styles.workDay}>
              <Text style={[styles.th1, styles.thTypo]}>Mon</Text>
            </View>
            <View style={styles.workDay}>
              <Text style={[styles.th1, styles.thTypo]}>Tue</Text>
            </View>
            <View style={styles.workDay}>
              <Text style={[styles.th1, styles.thTypo]}>Wed</Text>
            </View>
            <View style={styles.workDay}>
              <Text style={[styles.th1, styles.thTypo]}>Thu</Text>
            </View>
            <View style={styles.workDay}>
              <Text style={[styles.th1, styles.thTypo]}>Fri</Text>
            </View>
            <View style={styles.workDay}>
              <Text style={[styles.th, styles.thTypo]}>Sat</Text>
            </View>
          </View>
          <View style={styles.frameParent}>
            <View
              style={[styles.calendarDateParent, styles.calendarParentPosition]}
            >
              <View style={styles.calendarDate}>
                <Text style={[styles.text1, styles.textTypo]}>23</Text>
              </View>
              <View style={styles.calendarDate}>
                <Text style={[styles.text1, styles.textTypo]}>23</Text>
              </View>
              <View style={styles.calendarDate}>
                <Text style={[styles.text1, styles.textTypo]}>23</Text>
              </View>
              <View style={styles.calendarDate}>
                <Text style={[styles.text1, styles.textTypo]}>23</Text>
              </View>
              <View style={styles.calendarFlexBox}>
                <Text style={[styles.text5, styles.textTypo]}>1</Text>
                <Image
                  style={styles.calendarDateChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-11.png")}
                />
              </View>
              <View style={styles.calendarFlexBox}>
                <Text style={[styles.text5, styles.textTypo]}>2</Text>
                <Image
                  style={styles.calendarDateChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-12.png")}
                />
              </View>
              <View style={styles.calendarFlexBox}>
                <Text style={[styles.text5, styles.textTypo]}>3</Text>
                <Image
                  style={styles.calendarDateChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-13.png")}
                />
              </View>
            </View>
            <View
              style={[styles.calendarDateGroup, styles.calendarParentPosition]}
            >
              <View style={styles.calendarFlexBox}>
                <Text style={[styles.text8, styles.textTypo]}>4</Text>
                <Image
                  style={styles.calendarDateChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-1.png")}
                />
              </View>
              <View style={styles.calendarFlexBox}>
                <Text style={[styles.text5, styles.textTypo]}>5</Text>
                <Image
                  style={styles.calendarDateChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-14.png")}
                />
              </View>
              <View style={styles.calendarFlexBox}>
                <Text style={[styles.text5, styles.textTypo]}>6</Text>
                <Image
                  style={styles.calendarDateChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-15.png")}
                />
              </View>
              <View style={styles.calendarFlexBox}>
                <Text style={[styles.text5, styles.textTypo]}>7</Text>
                <Image
                  style={styles.calendarDateChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-16.png")}
                />
              </View>
              <View style={styles.calendarFlexBox}>
                <Text style={[styles.text5, styles.textTypo]}>8</Text>
                <Image
                  style={styles.calendarDateChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-11.png")}
                />
              </View>
              <View style={styles.calendarFlexBox}>
                <Text style={[styles.text5, styles.textTypo]}>9</Text>
                <Image
                  style={styles.calendarDateChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-12.png")}
                />
              </View>
              <View style={styles.calendarFlexBox}>
                <Text style={[styles.text8, styles.textTypo]}>10</Text>
                <Image
                  style={styles.calendarDateChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-13.png")}
                />
              </View>
            </View>
            <View
              style={[
                styles.calendarDateContainer,
                styles.calendarParentPosition,
              ]}
            >
              <View style={styles.calendarFlexBox}>
                <Text style={[styles.text8, styles.textTypo]}>11</Text>
                <Image
                  style={styles.calendarDateChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-1.png")}
                />
              </View>
              <View style={styles.calendarFlexBox}>
                <Text style={[styles.text5, styles.textTypo]}>23</Text>
                <Image
                  style={styles.calendarDateChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-14.png")}
                />
              </View>
              <View style={styles.calendarFlexBox}>
                <Text style={[styles.text5, styles.textTypo]}>13</Text>
                <Image
                  style={styles.calendarDateChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-15.png")}
                />
              </View>
              <View style={styles.calendarFlexBox}>
                <Text style={[styles.text5, styles.textTypo]}>14</Text>
                <Image
                  style={styles.calendarDateChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-16.png")}
                />
              </View>
              <View style={[styles.calendarDate18, styles.calendarFlexBox]}>
                <Text style={styles.text19}>15</Text>
                <Image
                  style={styles.calendarDateChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-11.png")}
                />
              </View>
              <View style={styles.calendarFlexBox}>
                <Text style={[styles.text5, styles.textTypo]}>16</Text>
                <Image
                  style={styles.calendarDateChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-12.png")}
                />
              </View>
              <View style={styles.calendarFlexBox}>
                <Text style={[styles.text5, styles.textTypo]}>17</Text>
                <Image
                  style={styles.calendarDateChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-13.png")}
                />
              </View>
            </View>
            <View style={[styles.frameView, styles.calendarParentPosition]}>
              <View style={styles.calendarFlexBox}>
                <Text style={[styles.text5, styles.textTypo]}>18</Text>
                <Image
                  style={styles.calendarDateChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-1.png")}
                />
              </View>
              <View style={styles.calendarFlexBox}>
                <Text style={[styles.text5, styles.textTypo]}>19</Text>
                <Image
                  style={styles.calendarDateChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-14.png")}
                />
              </View>
              <View style={styles.calendarFlexBox}>
                <Text style={[styles.text5, styles.textTypo]}>20</Text>
                <Image
                  style={styles.calendarDateChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-15.png")}
                />
              </View>
              <View style={styles.calendarFlexBox}>
                <Text style={[styles.text5, styles.textTypo]}>21</Text>
                <Image
                  style={styles.calendarDateChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-16.png")}
                />
              </View>
              <View style={styles.calendarFlexBox}>
                <Text style={[styles.text5, styles.textTypo]}>22</Text>
                <Image
                  style={styles.calendarDateChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-11.png")}
                />
              </View>
              <View style={styles.calendarFlexBox}>
                <Text style={[styles.text5, styles.textTypo]}>23</Text>
                <Image
                  style={styles.calendarDateChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-12.png")}
                />
              </View>
              <View style={styles.calendarFlexBox}>
                <Text style={[styles.text5, styles.textTypo]}>24</Text>
                <Image
                  style={styles.calendarDateChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-13.png")}
                />
              </View>
            </View>
            <View
              style={[
                styles.calendarDateParent1,
                styles.calendarParentPosition,
              ]}
            >
              <View style={styles.calendarFlexBox}>
                <Text style={[styles.text8, styles.textTypo]}>25</Text>
                <Image
                  style={styles.calendarDateChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-1.png")}
                />
              </View>
              <View style={styles.calendarFlexBox}>
                <Text style={[styles.text5, styles.textTypo]}>26</Text>
                <Image
                  style={styles.calendarDateChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-14.png")}
                />
              </View>
              <View style={styles.calendarFlexBox}>
                <Text style={[styles.text5, styles.textTypo]}>27</Text>
                <Image
                  style={styles.calendarDateChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-15.png")}
                />
              </View>
              <View style={styles.calendarFlexBox}>
                <Text style={[styles.text5, styles.textTypo]}>28</Text>
                <Image
                  style={styles.calendarDateChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-16.png")}
                />
              </View>
              <View style={styles.calendarFlexBox}>
                <Text style={[styles.text5, styles.textTypo]}>29</Text>
                <Image
                  style={styles.calendarDateChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-11.png")}
                />
              </View>
              <View style={styles.calendarFlexBox}>
                <Text style={[styles.text5, styles.textTypo]}>30</Text>
                <Image
                  style={styles.calendarDateChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-12.png")}
                />
              </View>
              <View style={styles.calendarDate}>
                <Text style={[styles.text1, styles.textTypo]}>23</Text>
              </View>
            </View>
          </View>
          <View style={styles.ctas}>
            <View style={styles.buttonsFlexBox}>
              <Text style={[styles.button2, styles.textTypo]}>Action 1</Text>
            </View>
            <View style={[styles.buttons1, styles.buttonsFlexBox]}>
              <Text style={[styles.button3, styles.textTypo]}>Action 2</Text>
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.chevronbackward}
        onPress={() => navigation.navigate("Frame16")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/chevronbackward1.png")}
        />
      </Pressable>
      <View style={[styles.statusBar, styles.leftFlexBox]}>
        <View style={[styles.left, styles.leftFlexBox]}>
          <Image
            style={styles.itemsIcon}
            contentFit="cover"
            source={require("../assets/items.png")}
          />
        </View>
        <View style={[styles.right, styles.leftFlexBox]}>
          <Image
            style={styles.itemsIcon1}
            contentFit="cover"
            source={require("../assets/items1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonPosition: {
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  leftFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  folderIconLayout: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  groupChildPosition: {
    height: 48,
    left: 0,
    top: 0,
  },
  groupChildShadowBox: {
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    width: 307,
    position: "absolute",
    backgroundColor: Color.neutral0,
  },
  decemberTypo: {
    fontSize: FontSize.inputM_size,
    textAlign: "left",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  thTypo: {
    width: 28,
    fontFamily: FontFamily.interRegular,
    lineHeight: 16,
    fontSize: FontSize.inputS_size,
    textAlign: "center",
  },
  calendarParentPosition: {
    width: 267,
    left: 0,
    flexDirection: "row",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interRegular,
    lineHeight: 16,
    fontSize: FontSize.inputS_size,
  },
  calendarFlexBox: {
    padding: Padding.p_5xs,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  buttonsFlexBox: {
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_9xs,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  blurEvenly: {
    backgroundColor: Color.neutral0,
    top: "0%",
  },
  autoTint: {
    backgroundColor: Color.lightAndDarkAutoTint,
  },
  items: {
    height: "14.71%",
    width: "35.47%",
    top: "61.76%",
    right: "32.26%",
    bottom: "23.53%",
    left: "32.26%",
    position: "absolute",
  },
  navigationBar: {
    height: "4.03%",
    width: "100.77%",
    top: "95.97%",
    left: "-0.77%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  scheduleTheCooking: {
    marginLeft: -183,
    top: "10.07%",
    fontSize: FontSize.headingMBold_size,
    letterSpacing: -0.7,
    lineHeight: 44,
    fontFamily: FontFamily.headingMBold,
    color: Color.neutral950,
    textAlign: "center",
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  folderIcon: {
    display: "none",
  },
  button1: {
    fontSize: FontSize.buttonL_size,
    fontFamily: FontFamily.buttonL,
    marginLeft: 10,
    textAlign: "left",
    color: Color.neutral0,
    fontWeight: "600",
  },
  folderIcon1: {
    marginLeft: 10,
    display: "none",
  },
  button: {
    borderRadius: StyleVariable.buttonL,
    backgroundColor: Color.colorSeagreen,
    paddingHorizontal: StyleVariable.buttonPaddingL,
    paddingVertical: 0,
    flexDirection: "row",
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  buttonWrapper: {
    height: "5.69%",
    width: "20.26%",
    top: "88.39%",
    right: "40%",
    bottom: "5.92%",
    left: "39.74%",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_5xs,
    shadowColor: "rgba(0, 0, 0, 0.13)",
    height: 48,
    left: 0,
    top: 0,
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  selectDate: {
    top: 14,
    left: 18,
    textTransform: "capitalize",
    fontFamily: FontFamily.latoBold,
    display: "flex",
    width: 103,
    height: 21,
    color: Color.colorDarkslategray_200,
    alignItems: "center",
    fontSize: FontSize.inputM_size,
    fontWeight: "700",
    position: "absolute",
  },
  vectorIcon: {
    height: "15.42%",
    width: "3.91%",
    top: "41.67%",
    right: "7.82%",
    bottom: "42.92%",
    left: "88.27%",
    position: "absolute",
  },
  rectangleParent: {
    width: 307,
    height: 48,
    left: 0,
    position: "absolute",
  },
  december: {
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.darkGray1,
  },
  chevronIcon1: {
    marginLeft: 8,
    display: "none",
  },
  year: {
    flexDirection: "row",
  },
  chevronIcon2: {
    marginLeft: 4,
    display: "none",
  },
  parent: {
    marginLeft: 4,
    flexDirection: "row",
  },
  dateHeader: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  th: {
    color: Color.primaryRed,
  },
  workDay: {
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  th1: {
    color: Color.darkGray1,
  },
  workDayParent: {
    marginTop: 20,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  text1: {
    color: Color.colorBlack,
    height: 16,
    textAlign: "left",
    display: "none",
    flex: 1,
  },
  calendarDate: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_base,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  text5: {
    color: Color.gray,
    zIndex: 0,
    textAlign: "center",
  },
  calendarDateChild: {
    top: 4,
    right: 4,
    width: 4,
    height: 4,
    zIndex: 1,
    display: "none",
    position: "absolute",
  },
  calendarDateParent: {
    top: 0,
    width: 267,
  },
  text8: {
    zIndex: 0,
    color: Color.colorDarkslategray_200,
    textAlign: "center",
  },
  calendarDateGroup: {
    top: 36,
  },
  text19: {
    fontFamily: FontFamily.interSemiBold,
    color: "#58a8f2",
    zIndex: 0,
    lineHeight: 16,
    fontSize: FontSize.inputS_size,
    fontWeight: "600",
    textAlign: "center",
  },
  calendarDate18: {
    borderRadius: Border.br_981xl,
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
  button2: {
    color: Color.primaryBlue,
    textAlign: "center",
  },
  button3: {
    color: Color.neutral0,
    textAlign: "center",
  },
  buttons1: {
    backgroundColor: Color.primaryBlue,
    marginLeft: 16,
  },
  ctas: {
    marginTop: 20,
    display: "none",
    flexDirection: "row",
  },
  datePicker: {
    top: 52,
    left: 1,
    borderRadius: Border.br_2xs,
    shadowColor: "rgba(0, 0, 0, 0.07)",
    height: 332,
    alignItems: "flex-end",
    padding: Padding.p_xl,
  },
  groupParent: {
    top: 200,
    left: 41,
    width: 308,
    height: 384,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  chevronbackward: {
    left: "2.56%",
    top: "7.11%",
    right: "90.77%",
    bottom: "89.81%",
    width: "6.67%",
    height: "3.08%",
    position: "absolute",
  },
  itemsIcon: {
    width: 35,
    height: 14,
  },
  left: {
    alignSelf: "stretch",
    flex: 1,
  },
  itemsIcon1: {
    width: 76,
    height: 14,
    zIndex: 0,
  },
  right: {
    width: 127,
    paddingRight: Padding.p_10xs,
    marginLeft: 179,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  statusBar: {
    height: "6.99%",
    marginLeft: -195,
    top: "0.47%",
    bottom: "92.54%",
    width: 390,
    paddingLeft: Padding.p_xl,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_xs,
    flexDirection: "row",
    left: "50%",
    justifyContent: "center",
    position: "absolute",
  },
  view: {
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.neutral0,
  },
});

export default Frame8;
