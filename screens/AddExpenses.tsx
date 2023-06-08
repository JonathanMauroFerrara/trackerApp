import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text } from "react-native";
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
            size={35}
            onPress={() => setIsModalVisible(true)}
            color={colorPalette.primary700}
          />
        </Pressable>

        <Modal animationType="slide" visible={isModalVisibile}>
          <GradientContainer
            firstColorGradient={colorPalette.primary300}
            secondColorGradient={colorPalette.primary500}
          >
            <Container>
              <Text>I am the modal content!</Text>
            </Container>
          </GradientContainer>
        </Modal>
      </GestureRecognizer>
    </>
  );
};

export default AddExpenses;

const styles = StyleSheet.create({});
