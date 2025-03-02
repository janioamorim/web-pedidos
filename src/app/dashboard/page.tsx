"use client";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getOrders } from "../services/orderService";
import { Order } from "../models/Order";
import OrdersTable from "../components/OrdersTable";
import PlaceHolderTable from "../components/PlaceholderTable";
import Footer from "../components/Footer";
import NoData from "../components/NoData";
import InfoCard from "../components/InfoCard";


export default function Dashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [placeholder, setPlaceholder] = useState<boolean>(true);
  const [erroRequest, setErroRequest] = useState<boolean>(false);
  const [noDataOrders, setNoDataOrders] = useState<boolean>(false);

 
  const fetchOrders = useCallback(async () => {
    setPlaceholder(true);
    try {
      const ordersresult = await getOrders();
      setOrders(ordersresult);
      if(ordersresult.length === 0){
        setNoDataOrders(true);
      }
    } catch (error) {
      setErroRequest(true)
    }finally{
      setPlaceholder(false);
    }
  }, []);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);


  const { amountTotal, successfulSalesCount, successfulSalesTotal, averageTicket } = useMemo(() => {
    const total = orders.reduce((acc, order) => acc + order.payment.amount, 0);
    const successfulOrders = orders.filter(order => order.payment.status === "succeeded");
    const totalSuccessfulOrders = successfulOrders.reduce((acc, order) => acc + order.payment.amount, 0);
    const ticketMedio = successfulOrders.length > 0 ? totalSuccessfulOrders / successfulOrders.length : 0;

    return {
      amountTotal: total,
      successfulSalesTotal: totalSuccessfulOrders,
      successfulSalesCount: successfulOrders.length,
      averageTicket: ticketMedio
    };
  }, [orders]);

  const hasOrders = useMemo(() => orders.length > 0, [orders]);
 
  return (
    <div className="flex min-h-screen w-full bg-gray-custom">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 flex flex-col">
          <Header />
          <div className="flex-1 mt-6 mx-10">
            <h1 className="text-base text-gray-400">Resumo dos pedidos</h1>
          
            <div className="flex items-center justify-between gap-5 py-5">
              <InfoCard
                icon="/pedidos-icon.svg"
                label="Pedidos"
                value={orders.length}
                amount={amountTotal}
              />
              <InfoCard
                icon="/vendas-icon.svg"
                label="Vendas"
                value={successfulSalesCount}
                amount={successfulSalesTotal}
              />
              <InfoCard
                icon="/ticket-icon.svg"
                label="Ticket Médio"
                amount={averageTicket}
              />
 
            </div>

            <div className="py-8">
              <div className="overflow-x-auto rounded-8">
                  
                { placeholder && <PlaceHolderTable />}
                { hasOrders && <OrdersTable orders={orders} /> }
                { noDataOrders && <NoData />}

              </div>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}