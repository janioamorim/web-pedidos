import { useState } from "react";
import { formatCurrency, formatDate } from "../utils/utils";
import Pagination from "./Pagination";

const headers = [
    "ID do Pedido",
    "ID na Loja",
    "Criação",
    "Nome do Cliente",
    "CPF/CNPJ do Cliente",
    "Status do Pedido",
    "Status do Pagamento",
    "Método de Pagamento",
    "Total"
  ];
const headerColors = ["#FE877A", "#FE7C6E"];

export default function OrdersTable({ orders }: { orders: any[] }) {
    
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = Math.ceil(orders.length / itemsPerPage);

  // Cálculo para exibir apenas os itens da página atual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOrders = orders.slice(startIndex, startIndex + itemsPerPage);

  const changePage = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
  };

  const parseTypePayment = (type: string) => {
    switch (type) {
      case "credit":
        return "Cartão à vista";
      case "credit_installments":
        return "Cartão à prazo";
      case "boleto":
        return "Boleto";
      case "pix":
        return "PIX";
      case "PIX":
        return "PIX";
      default:
        return "Não identificado";
    }
  };

  const parseStatusOrder = (type: string) => {
    switch (type) {
      case "pending":
        return "Pagamento pendente";
      case "approved":
        return "Pagamento aprovado";
      case "created":
        return "Criado";
      case "delivered":
        return "Entregue";
      default:
        return "Não identificado";
    }
  };
  const parseStatusPayment = (type: string) => {
    switch (type) {
      case "pending":
        return "Pendente";
      case "succeeded":
        return "Aprovado";
      case "cancelled":
        return "Cancelado";
      case "Aprovada":
        return "Aprovado";
      default:
        return "Não identificado";
    }
  };

  return (
    <div>
      <table className="min-w-full border border-gray-200 shadow-md rounded-lg table-custom">
        <thead>
          <tr className="text-white">
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-2 text-left"
                style={{ backgroundColor: headerColors[index % 2] }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {paginatedOrders.map((order, index) => (
            <tr key={index} className="border-t border-gray-200">
              <td className="px-4 py-2">{order._id}</td>
              <td className="px-4 py-2">{order.seller.id}</td>
              <td className="px-4 py-2">
                {order.payment.date && formatDate(order.payment.date)}
              </td>
              <td className="px-4 py-2">{order.customer.name}</td>
              <td className="px-4 py-2">{order.customer.doc}</td>
              <td className="px-4 py-2">
                {parseStatusOrder(order.delivery.status)}
              </td>
              <td className="px-4 py-2">
                {parseStatusPayment(order.payment.status)}
              </td>
              <td className="px-4 py-2">
                {parseTypePayment(order.payment.method)}
              </td>
              <td className="px-4 py-2 font-semibold">
                {formatCurrency(order.payment.amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={(items) => {
          setItemsPerPage(items);
          setCurrentPage(1); // Resetar para a primeira página ao mudar itens por página
        }}
        changePage={changePage}
      />
    </div>
  );
}
