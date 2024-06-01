import OrderProduct from "@/models/OrderProduct";
import { createContext } from "react";

interface OrderProductContextContent {
  setOrderProducts:
    | React.Dispatch<React.SetStateAction<OrderProduct[] | undefined>>
    | undefined;
  orderProducts: OrderProduct[] | undefined;
}

export const OrderProductContext = createContext<OrderProductContextContent>({
  orderProducts: undefined,
  setOrderProducts: undefined,
});

export default OrderProductContext;
