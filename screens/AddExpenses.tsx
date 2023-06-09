import React, { useState } from "react";
import { Button, Modal, Pressable, StyleSheet, View } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import Container from "../components/Container/Container";
import GradientContainer from "../components/GradientContainer/GradientContainer";
import IconButton from "../components/ui/IconButton";
import { colorPalette } from "../constants/colors";

const AddExpenses = () => {
  const [isModalVisibile, setIsModalVisible] = useState(false);

  return (
    <>
      <GestureRecognizer onSwipeDown={() => setIsModalVisible(false)}>
        <Pressable>
          <IconButton
            iconName="add"
            size={50}
            onPress={() => setIsModalVisible(true)}
            color={colorPalette.white}
            className={styles.closeButtonContainer}
          />
        </Pressable>

        <Modal animationType="slide" visible={isModalVisibile}>
          <GradientContainer
            firstColorGradient={colorPalette.primary300}
            secondColorGradient={colorPalette.primary500}
          >
            <Container>
              <View style={{ alignSelf: "flex-end" }}>
                <IconButton
                  iconName="close-circle-outline"
                  color={colorPalette.white}
                  size={50}
                  onPress={() => setIsModalVisible(false)}
                />
              </View>

              <View style={styles.modalContainer}>
                <View style={styles.addButton}>
                  <Button title="Add expense" color={colorPalette.primary700} />
                </View>
              </View>
            </Container>
          </GradientContainer>
        </Modal>
      </GestureRecognizer>
    </>
  );
};

export default AddExpenses;

const styles = StyleSheet.create({
  closeButtonContainer: {
    backgroundColor: colorPalette.primary500,
    borderRadius: 50,
    top: -20,
    borderWidth: 1,
    borderColor: colorPalette.white,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addButton: {
    backgroundColor: colorPalette.white,
    borderRadius: 10,
  },
});
