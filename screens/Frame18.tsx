import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  FontFamily,
  FontSize,
  Color,
  StyleVariable,
  Padding,
} from "../GlobalStyles";

const Frame18 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.view}>
      <Image
        style={styles.child}
        contentFit="cover"
        source={require("../assets/ellipse-41.png")}
      />
      <Image
        style={styles.chevronbackwardIcon}
        contentFit="cover"
        source={require("../assets/chevronbackward3.png")}
      />
      <View style={[styles.formFieldtextInputs, styles.formPosition]}>
        <View style={styles.label}>
          <Text style={styles.label1}>Gender</Text>
        </View>
        <View style={[styles.textInput, styles.buttonSpaceBlock]}>
          <View style={styles.leadingDropdown}>
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
          <Text style={[styles.placeholder, styles.plTypo]}>Female</Text>
          <View style={styles.trailingDropdown}>
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
        <View style={styles.label}>
          <Text style={styles.label1}>Date of birth</Text>
        </View>
        <View style={[styles.textInput, styles.buttonSpaceBlock]}>
          <View style={styles.leadingDropdown}>
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
          <View style={styles.trailingDropdown}>
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
      <View style={[styles.formFieldtextInputs2, styles.formPosition]}>
        <View style={styles.label}>
          <Text style={styles.label1}>Username</Text>
        </View>
        <View style={[styles.textInput, styles.buttonSpaceBlock]}>
          <View style={styles.leadingDropdown}>
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
          <View style={styles.trailingDropdown}>
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
      <View style={[styles.formFieldtextInputs3, styles.formPosition]}>
        <View style={styles.label}>
          <Text style={styles.label1}>Password</Text>
        </View>
        <View style={[styles.textInput, styles.buttonSpaceBlock]}>
          <View style={styles.leadingDropdown}>
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
          <Text style={[styles.placeholder, styles.plTypo]}>12345678</Text>
          <View style={styles.trailingDropdown}>
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
      <View style={[styles.formFieldtextInputs4, styles.formPosition]}>
        <View style={styles.label}>
          <Text style={styles.label1}>E-Mail</Text>
        </View>
        <View style={[styles.textInput, styles.buttonSpaceBlock]}>
          <View style={styles.leadingDropdown}>
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
            marie.redick@gmail.com
          </Text>
          <View style={styles.trailingDropdown}>
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
      <View style={[styles.formFieldtextInputs5, styles.formPosition]}>
        <View style={styles.label}>
          <Text style={styles.label1}>Confirm password</Text>
        </View>
        <View style={[styles.textInput, styles.buttonSpaceBlock]}>
          <View style={styles.leadingDropdown}>
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
          <Text style={[styles.placeholder, styles.plTypo]}>12345678</Text>
          <View style={styles.trailingDropdown}>
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
        style={styles.item}
        contentFit="cover"
        source={require("../assets/ellipse-31.png")}
      />
      <View style={styles.navigationBar}>
        <View style={styles.items}>
          <View style={[styles.blurEvenly, styles.buttonPosition]} />
          <View style={[styles.autoTint, styles.buttonPosition]} />
        </View>
      </View>
      <Text style={[styles.createAnAccount, styles.statusBarPosition]}>
        Create an account
      </Text>
      <View style={[styles.formFieldtextInputs6, styles.formPosition]}>
        <View style={styles.label}>
          <Text style={styles.label1}>Full name</Text>
        </View>
        <View style={[styles.textInput, styles.buttonSpaceBlock]}>
          <View style={styles.leadingDropdown}>
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
          <Text style={[styles.placeholder, styles.plTypo]}>Marie Redick</Text>
          <View style={styles.trailingDropdown}>
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
        onPress={() => navigation.navigate("Frame15")}
      >
        <View style={[styles.button, styles.leftFlexBox]}>
          <Image
            style={styles.folderIconLayout}
            contentFit="cover"
            source={require("../assets/folder2.png")}
          />
          <Text style={[styles.button1, styles.plTypo]}>Create</Text>
          <Image
            style={[styles.folderIcon1, styles.folderIconLayout]}
            contentFit="cover"
            source={require("../assets/folder3.png")}
          />
        </View>
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
  buttonSpaceBlock: {
    paddingVertical: 0,
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
  buttonPosition: {
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  statusBarPosition: {
    left: "50%",
    position: "absolute",
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
  child: {
    top: 0,
    left: 0,
    width: 717,
    height: 217,
    position: "absolute",
  },
  chevronbackwardIcon: {
    height: "3.08%",
    width: "6.67%",
    top: "7.11%",
    right: "90.77%",
    bottom: "89.81%",
    left: "2.56%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
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
    alignItems: "center",
    flexDirection: "row",
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
    alignItems: "center",
    flexDirection: "row",
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
    alignItems: "center",
    flexDirection: "row",
  },
  textInput: {
    borderRadius: StyleVariable.inputM,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: StyleVariable.inputPaddingM,
    marginTop: 6,
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: Color.neutral0,
  },
  formFieldtextInputs: {
    top: 238,
  },
  formFieldtextInputs1: {
    top: 321,
  },
  formFieldtextInputs2: {
    top: 487,
  },
  formFieldtextInputs3: {
    top: 570,
  },
  formFieldtextInputs4: {
    top: 404,
  },
  formFieldtextInputs5: {
    top: 653,
    height: 61,
  },
  item: {
    top: 736,
    left: 195,
    width: 261,
    height: 233,
    position: "absolute",
  },
  blurEvenly: {
    backgroundColor: Color.neutral0,
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
  createAnAccount: {
    marginLeft: -155,
    top: 85,
    fontSize: FontSize.headingMBold_size,
    letterSpacing: -0.7,
    lineHeight: 44,
    textAlign: "center",
    color: Color.neutral0,
    fontFamily: FontFamily.headingMBold,
    fontWeight: "700",
    left: "50%",
  },
  formFieldtextInputs6: {
    top: 155,
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
    alignSelf: "stretch",
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
    left: "50%",
    position: "absolute",
    flexDirection: "row",
  },
  view: {
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.neutral0,
  },
});

export default Frame18;
