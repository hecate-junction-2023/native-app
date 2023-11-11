import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  FontFamily,
  StyleVariable,
  Color,
  FontSize,
  Padding,
} from "../GlobalStyles";

const Frame13 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.view}>
      <View style={[styles.formFieldtextInputs, styles.formPosition]}>
        <View style={[styles.label, styles.labelFlexBox]}>
          <Text style={styles.label1}>Password</Text>
        </View>
        <View style={styles.textBorder}>
          <View style={[styles.leadingDropdown, styles.labelFlexBox]}>
            <Image
              style={styles.plPolandLayout}
              contentFit="cover"
              source={require("../assets/pl--poland1.png")}
            />
            <Text style={[styles.pl, styles.plTypo]}>PL</Text>
            <Image
              style={styles.chevronDownIcon}
              contentFit="cover"
              source={require("../assets/chevrondown1.png")}
            />
          </View>
          <Image
            style={[styles.envelopeIcon, styles.plPolandLayout]}
            contentFit="cover"
            source={require("../assets/envelope.png")}
          />
          <Text style={[styles.text, styles.plTypo]}>$</Text>
          <Text style={[styles.placeholder, styles.plTypo]}>Redick</Text>
          <View style={[styles.trailingDropdown, styles.labelFlexBox]}>
            <Image
              style={styles.plPolandLayout}
              contentFit="cover"
              source={require("../assets/pl--poland1.png")}
            />
            <Text style={[styles.pl, styles.plTypo]}>PL</Text>
            <Image
              style={styles.chevronDownIcon}
              contentFit="cover"
              source={require("../assets/chevrondown1.png")}
            />
          </View>
          <Text style={[styles.text, styles.plTypo]}>$</Text>
          <Image
            style={[styles.envelopeIcon, styles.plPolandLayout]}
            contentFit="cover"
            source={require("../assets/questioncircle.png")}
          />
        </View>
      </View>
      <View style={[styles.formFieldtextInputs1, styles.formPosition]}>
        <View style={[styles.label2, styles.labelFlexBox]}>
          <Text style={styles.label1}>Date of birth</Text>
        </View>
        <View style={[styles.textInput1, styles.textBorder]}>
          <View style={[styles.leadingDropdown, styles.labelFlexBox]}>
            <Image
              style={styles.plPolandLayout}
              contentFit="cover"
              source={require("../assets/pl--poland1.png")}
            />
            <Text style={[styles.pl, styles.plTypo]}>PL</Text>
            <Image
              style={styles.chevronDownIcon}
              contentFit="cover"
              source={require("../assets/chevrondown1.png")}
            />
          </View>
          <Image
            style={[styles.envelopeIcon, styles.plPolandLayout]}
            contentFit="cover"
            source={require("../assets/envelope.png")}
          />
          <Text style={[styles.text, styles.plTypo]}>$</Text>
          <Text style={[styles.placeholder, styles.plTypo]}>12.06.1992</Text>
          <View style={[styles.trailingDropdown, styles.labelFlexBox]}>
            <Image
              style={styles.plPolandLayout}
              contentFit="cover"
              source={require("../assets/pl--poland1.png")}
            />
            <Text style={[styles.pl, styles.plTypo]}>PL</Text>
            <Image
              style={styles.chevronDownIcon}
              contentFit="cover"
              source={require("../assets/chevrondown1.png")}
            />
          </View>
          <Text style={[styles.text, styles.plTypo]}>$</Text>
          <Image
            style={[styles.envelopeIcon, styles.plPolandLayout]}
            contentFit="cover"
            source={require("../assets/questioncircle.png")}
          />
        </View>
      </View>
      <Image
        style={styles.child}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.item, styles.itemLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <View style={styles.navigationBar}>
        <View style={styles.items}>
          <View style={[styles.blurEvenly, styles.buttonPosition]} />
          <View style={[styles.autoTint, styles.buttonPosition]} />
        </View>
      </View>
      <Text style={styles.login}>Login</Text>
      <View style={[styles.formFieldtextInputs2, styles.formPosition]}>
        <View style={[styles.label, styles.labelFlexBox]}>
          <Text style={styles.label1}>Username</Text>
        </View>
        <View style={styles.textBorder}>
          <View style={[styles.leadingDropdown, styles.labelFlexBox]}>
            <Image
              style={styles.plPolandLayout}
              contentFit="cover"
              source={require("../assets/pl--poland1.png")}
            />
            <Text style={[styles.pl, styles.plTypo]}>PL</Text>
            <Image
              style={styles.chevronDownIcon}
              contentFit="cover"
              source={require("../assets/chevrondown1.png")}
            />
          </View>
          <Image
            style={[styles.envelopeIcon, styles.plPolandLayout]}
            contentFit="cover"
            source={require("../assets/envelope.png")}
          />
          <Text style={[styles.text, styles.plTypo]}>$</Text>
          <Text style={[styles.placeholder, styles.plTypo]}>
            marielovesfood
          </Text>
          <View style={[styles.trailingDropdown, styles.labelFlexBox]}>
            <Image
              style={styles.plPolandLayout}
              contentFit="cover"
              source={require("../assets/pl--poland1.png")}
            />
            <Text style={[styles.pl, styles.plTypo]}>PL</Text>
            <Image
              style={styles.chevronDownIcon}
              contentFit="cover"
              source={require("../assets/chevrondown1.png")}
            />
          </View>
          <Text style={[styles.text, styles.plTypo]}>$</Text>
          <Image
            style={[styles.envelopeIcon, styles.plPolandLayout]}
            contentFit="cover"
            source={require("../assets/questioncircle.png")}
          />
        </View>
      </View>
      <Pressable
        style={styles.buttonWrapper}
        onPress={() => navigation.navigate("Frame3")}
      >
        <View style={[styles.button, styles.leftFlexBox]}>
          <Image
            style={styles.folderIconLayout}
            contentFit="cover"
            source={require("../assets/folder.png")}
          />
          <Text style={[styles.button1, styles.plTypo]}>Login</Text>
          <Image
            style={[styles.folderIcon1, styles.folderIconLayout]}
            contentFit="cover"
            source={require("../assets/folder1.png")}
          />
        </View>
      </Pressable>
      <Pressable
        style={styles.chevronbackward}
        onPress={() => navigation.navigate("Frame17")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/chevronbackward3.png")}
        />
      </Pressable>
      <View style={[styles.statusBar, styles.leftFlexBox]}>
        <View style={[styles.left, styles.leftFlexBox]}>
          <Image
            style={styles.itemsIcon}
            contentFit="cover"
            source={require("../assets/items2.png")}
          />
        </View>
        <View style={[styles.right, styles.leftFlexBox]}>
          <Image
            style={styles.itemsIcon1}
            contentFit="cover"
            source={require("../assets/items3.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formPosition: {
    width: 312,
    left: 46,
    position: "absolute",
  },
  labelFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  plTypo: {
    fontFamily: FontFamily.buttonL,
    fontWeight: "600",
    textAlign: "left",
  },
  plPolandLayout: {
    height: 16,
    width: 16,
    display: "none",
  },
  textBorder: {
    marginTop: 6,
    paddingHorizontal: StyleVariable.inputPaddingM,
    height: 40,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    borderRadius: StyleVariable.inputM,
    paddingVertical: 0,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: Color.neutral0,
  },
  itemLayout: {
    width: 390,
    position: "absolute",
  },
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
    display: "none",
    overflow: "hidden",
  },
  label1: {
    fontSize: FontSize.inputS_size,
    textAlign: "left",
    color: Color.neutral500,
    fontFamily: FontFamily.headingMBold,
    fontWeight: "700",
    flex: 1,
  },
  label: {
    alignSelf: "stretch",
  },
  pl: {
    marginLeft: 4,
    fontSize: FontSize.inputM_size,
    fontWeight: "600",
    color: Color.neutral500,
  },
  chevronDownIcon: {
    width: 12,
    height: 12,
    marginLeft: 4,
    overflow: "hidden",
  },
  leadingDropdown: {
    display: "none",
  },
  envelopeIcon: {
    marginLeft: 8,
    overflow: "hidden",
  },
  text: {
    marginLeft: 8,
    fontSize: FontSize.inputM_size,
    fontWeight: "600",
    color: Color.neutral500,
    display: "none",
  },
  placeholder: {
    marginLeft: 8,
    fontSize: FontSize.inputM_size,
    fontWeight: "600",
    color: Color.neutral500,
    flex: 1,
  },
  trailingDropdown: {
    marginLeft: 8,
    display: "none",
  },
  formFieldtextInputs: {
    top: 413,
  },
  label2: {
    display: "none",
    alignSelf: "stretch",
  },
  textInput1: {
    display: "none",
  },
  formFieldtextInputs1: {
    top: 321,
  },
  child: {
    top: 577,
    left: 152,
    width: 238,
    height: 267,
    position: "absolute",
  },
  item: {
    top: 0,
    left: 0,
    height: 201,
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
  login: {
    top: 85,
    left: 146,
    fontSize: FontSize.headingMBold_size,
    letterSpacing: -0.7,
    lineHeight: 44,
    textAlign: "center",
    color: Color.neutral0,
    fontFamily: FontFamily.headingMBold,
    fontWeight: "700",
    position: "absolute",
  },
  formFieldtextInputs2: {
    top: 330,
  },
  button1: {
    fontSize: FontSize.buttonL_size,
    marginLeft: 10,
    color: Color.neutral0,
  },
  folderIcon1: {
    marginLeft: 10,
  },
  button: {
    borderRadius: StyleVariable.buttonL,
    backgroundColor: Color.colorSeagreen,
    paddingHorizontal: StyleVariable.buttonPaddingL,
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    paddingVertical: 0,
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonWrapper: {
    height: "5.69%",
    width: "20.26%",
    top: "88.39%",
    right: "39.74%",
    bottom: "5.92%",
    left: "40%",
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "100%",
    overflow: "hidden",
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
    zIndex: 0,
    height: 14,
  },
  right: {
    width: 127,
    paddingRight: Padding.p_10xs,
    marginLeft: 179,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  statusBar: {
    height: "6.99%",
    marginLeft: -195,
    top: "0.47%",
    bottom: "92.54%",
    left: "50%",
    paddingLeft: Padding.p_xl,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_xs,
    width: 390,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
  },
  view: {
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.neutral0,
  },
});

export default Frame13;
