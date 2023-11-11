import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Color,
  FontFamily,
  FontSize,
  StyleVariable,
  Padding,
} from "../GlobalStyles";

const Frame16 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.view}>
      <View style={styles.navigationBar}>
        <View style={styles.items}>
          <View style={[styles.blurEvenly, styles.buttonPosition]} />
          <View style={[styles.autoTint, styles.buttonPosition]} />
        </View>
      </View>
      <Text style={[styles.foodPreferences, styles.foodTypo]}>
        Food preferences
      </Text>
      <Text
        style={[styles.whatFoodMakes, styles.leftFlexBox]}
      >{`What food makes 
your pain go away?`}</Text>
      <View style={[styles.formFieldtextInputs, styles.formLayout]}>
        <View style={[styles.label, styles.dropdownFlexBox]}>
          <Text style={styles.label1}>Username</Text>
        </View>
        <View style={[styles.textInput, styles.buttonFlexBox]}>
          <View style={[styles.leadingDropdown, styles.dropdownFlexBox]}>
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
          <Text style={[styles.placeholder, styles.plTypo]}>Sushi</Text>
          <View style={[styles.trailingDropdown, styles.dropdownFlexBox]}>
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
      <View style={[styles.formFieldtextInputs1, styles.formLayout]}>
        <View style={[styles.label, styles.dropdownFlexBox]}>
          <Text style={styles.label1}>Username</Text>
        </View>
        <View style={[styles.textInput, styles.buttonFlexBox]}>
          <View style={[styles.leadingDropdown, styles.dropdownFlexBox]}>
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
          <Text style={[styles.placeholder, styles.plTypo]}>Pasta</Text>
          <View style={[styles.trailingDropdown, styles.dropdownFlexBox]}>
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
      <View style={[styles.formFieldtextInputs2, styles.formLayout]}>
        <View style={[styles.label, styles.dropdownFlexBox]}>
          <Text style={styles.label1}>Username</Text>
        </View>
        <View style={[styles.textInput, styles.buttonFlexBox]}>
          <View style={[styles.leadingDropdown, styles.dropdownFlexBox]}>
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
          <Text style={[styles.placeholder, styles.plTypo]}>Pizza</Text>
          <View style={[styles.trailingDropdown, styles.dropdownFlexBox]}>
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
        onPress={() => navigation.navigate("Frame14")}
      >
        <View style={[styles.button, styles.buttonFlexBox]}>
          <Image
            style={styles.folderIconLayout}
            contentFit="cover"
            source={require("../assets/folder.png")}
          />
          <Text style={[styles.button1, styles.plTypo]}>Next</Text>
          <Image
            style={[styles.folderIcon1, styles.folderIconLayout]}
            contentFit="cover"
            source={require("../assets/folder1.png")}
          />
        </View>
      </Pressable>
      <Image
        style={[styles.iconFruitsLemon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon--fruits--lemon1.png")}
      />
      <Image
        style={[styles.iconFruitsAvocado, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon--fruits--avocado1.png")}
      />
      <Pressable
        style={styles.chevronbackward}
        onPress={() => navigation.navigate("Frame15")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/chevronbackward1.png")}
        />
      </Pressable>
      <View style={[styles.statusBar, styles.dropdownFlexBox]}>
        <View style={[styles.left, styles.leftFlexBox]}>
          <Image
            style={styles.itemsIcon}
            contentFit="cover"
            source={require("../assets/items.png")}
          />
        </View>
        <View style={[styles.right, styles.dropdownFlexBox]}>
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
  foodTypo: {
    textAlign: "center",
    color: Color.neutral950,
    fontFamily: FontFamily.headingMBold,
    fontWeight: "700",
    position: "absolute",
  },
  leftFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  formLayout: {
    height: 61,
    width: 312,
    left: 39,
    position: "absolute",
  },
  dropdownFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonFlexBox: {
    paddingVertical: 0,
    flexDirection: "row",
    alignItems: "center",
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
  folderIconLayout: {
    height: 20,
    width: 20,
    display: "none",
    overflow: "hidden",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
  foodPreferences: {
    marginLeft: -151,
    top: 85,
    fontSize: FontSize.headingMBold_size,
    letterSpacing: -0.7,
    lineHeight: 44,
    left: "50%",
  },
  whatFoodMakes: {
    top: 219,
    left: 78,
    fontSize: FontSize.headingXSBold_size,
    lineHeight: 32,
    display: "flex",
    width: 228,
    height: 75,
    justifyContent: "center",
    textAlign: "center",
    color: Color.neutral950,
    fontFamily: FontFamily.headingMBold,
    fontWeight: "700",
    position: "absolute",
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
    display: "none",
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
  textInput: {
    borderRadius: StyleVariable.inputM,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: StyleVariable.inputPaddingM,
    marginTop: 6,
    alignSelf: "stretch",
    backgroundColor: Color.neutral0,
  },
  formFieldtextInputs: {
    top: 335,
  },
  formFieldtextInputs1: {
    top: 396,
  },
  formFieldtextInputs2: {
    top: 457,
  },
  button1: {
    fontSize: FontSize.buttonL_size,
    color: Color.neutral0,
    marginLeft: 10,
  },
  folderIcon1: {
    marginLeft: 10,
  },
  button: {
    borderRadius: StyleVariable.buttonL,
    backgroundColor: Color.colorSeagreen,
    paddingHorizontal: StyleVariable.buttonPaddingL,
    justifyContent: "center",
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
    right: "39.74%",
    bottom: "5.92%",
    left: "40%",
    position: "absolute",
  },
  iconFruitsLemon: {
    height: "14.34%",
    width: "29.49%",
    top: "65.52%",
    right: "26.41%",
    bottom: "20.14%",
    left: "44.1%",
    position: "absolute",
  },
  iconFruitsAvocado: {
    height: "18.28%",
    width: "37.49%",
    top: "66.04%",
    right: "35.59%",
    bottom: "15.68%",
    left: "26.92%",
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
    justifyContent: "center",
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
    alignSelf: "stretch",
    justifyContent: "center",
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
    justifyContent: "center",
    left: "50%",
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

export default Frame16;
