import { Modal, TouchableOpacity, Platform } from "react-native";

import { Text } from "../Text";

import {
  Overlay,
  ModalBody,
  Header,
  Form,
  Input
} from "./styles";
import { Close } from "../Icons/Close";
import { Button } from "../Button";
import { useState } from "react";

interface TableModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (tableNumber: string) => void;
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
  const [tableNumber, setTableNumber] = useState('');

  function handleSave() {
    setTableNumber('');
    onSave(tableNumber);
    onClose();
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <Overlay
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
      >
        <ModalBody>
          <Header>
            <Text  weight={600}>Informe a mesa</Text>
            <TouchableOpacity
              onPress={onClose}
            >
              <Close color="#666"/>
            </TouchableOpacity>
          </Header>
          <Form>
            <Input
              placeholder="Número da mesa"
              placeholderTextColor="#666"
              keyboardType="number-pad"
              onChangeText={setTableNumber}
            />
          </Form>

          <Button
            onPress={handleSave}
            disabled={tableNumber.length === 0}
          >
            Salvar
          </Button>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
