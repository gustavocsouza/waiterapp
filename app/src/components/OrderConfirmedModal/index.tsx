import { Modal } from "react-native";

import { Container, OkButton } from "./styles";
import { CheckCircle } from "../Icons/CheckCircle";
import { Text } from "../Text";

interface OrderConfirmedModalProps {
  visible: boolean;
  onOk: () => void;
}

export function OrderConfirmedModal({ visible, onOk }: OrderConfirmedModalProps) {
  return (
    <Modal
      visible={visible}
      animationType="fade"
    >
      <Container>
        <CheckCircle />
        <Text
          style={{ marginTop: 12 }}
          weight={600}
          size={20}
          color="#fff"
        >
          Pedido confirmado
        </Text>
        <Text
          style={{ marginTop: 4 }}
          color="#fff"
          opacity={0.9}
        >
          O pedido já entrou na fila de produção!
        </Text>
        <OkButton
          onPress={onOk}
        >
          <Text
            color="#d73035"
            weight={600}
          >
            OK
          </Text>
        </OkButton>
      </Container>
    </Modal>
  );
}
