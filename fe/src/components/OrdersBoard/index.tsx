import { useState } from "react";
import { api } from "../../utils/api";

import { toast } from "react-toastify";

import { Order } from "../../types/Order";

import { OrderModal } from "../OrderModal";
import { Board, OrdersContainer } from "./styles";

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Array<Order>;
  onCancelOrder: (orderId: string) => void;
  onChangeOrderStatus: (orderId: string, status: Order['status']) => void;
}

export function OrdersBoard({ icon, title, orders, onCancelOrder, onChangeOrderStatus }: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  async function handleChangeOrderStatus() {
    setIsLoading(true);

    const newStatus = selectedOrder?.status === 'WAITING'
      ? 'IN_PRODUCTION'
      : 'DONE';

    await api.patch(`/orders/${selectedOrder?._id}`, { status: newStatus });

    toast.success(
      selectedOrder?.status === 'WAITING'
      ? `O pedido da mesa ${selectedOrder?.table} está em produção!`
      : `O pedido da mesa ${selectedOrder?.table} foi concluído!`
    )

    onChangeOrderStatus(selectedOrder!._id, newStatus);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  async function handleCancelOrder() {
    setIsLoading(true);

    await api.delete(`/orders/${selectedOrder!._id}`)

    toast.success(`O pedido da mesa ${selectedOrder?.table} foi cancelado!`)

    onCancelOrder(selectedOrder!._id);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  return (
    <Board>
        <OrderModal
          visible={isModalVisible}
          order={selectedOrder}
          onClose={handleCloseModal}
          onCancelOrder={handleCancelOrder}
          onChangeOrderStatus={handleChangeOrderStatus}
          isLoading={isLoading}
        />

        <header>
          <span>{ icon }</span>
          <strong>{ title }</strong>
          <span>({orders.length})</span>
        </header>

       {orders.length > 0 ? (
        <OrdersContainer>
          {orders.map((order) => (
            <button
              type="button"
              key={order._id}
              onClick={() => handleOpenModal(order)}
            >
              <strong>Mesa { order.table }</strong>
              <span>{ order.products.length } itens</span>
            </button>
          ))}
        </OrdersContainer>
       )
       : <p>Nenhum item</p>
      }
      </Board>
  );
}
