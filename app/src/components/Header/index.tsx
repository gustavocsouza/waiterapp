import { TouchableOpacity } from "react-native";
import { Text } from "../Text";
import { Container, Content, OrderHeader, TableCard } from "./styles";

interface HeaderProps {
  selectedTable: string;
  onCancelOrder: () => void;
}

export function Header({ selectedTable, onCancelOrder }: HeaderProps) {
  return (
    <Container>
      {!selectedTable && (
       <>
         <Text
            size={14}
            opacity={0.9}
          >
            Bem-vindo(a) ao
          </Text>

          <Text
            size={24}
            weight={700}
          >
            WAITER<Text size={24}>APP</Text>
          </Text>
       </>
      )}

      {selectedTable && (
        <Content>
          <OrderHeader>
            <Text size={24} weight={600}>Pedido</Text>
            <TouchableOpacity
              onPress={onCancelOrder}
            >
              <Text
                color="#d73035"
                weight={600}
                size={14}
              >
                Cancelar Pedido
              </Text>
            </TouchableOpacity>
          </OrderHeader>

          <TableCard>
            <Text color="#666">Mesa {selectedTable}</Text>
          </TableCard>
        </Content>
      )}
    </Container>
  )
}
