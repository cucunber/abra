import { useContext } from "react";
import { DraggableListenersContext } from "./draggableListeners.context";

export const useDraggableListenersContext = () => {
  const context = useContext(DraggableListenersContext);

  if (!context) {
    throw "Оберни в контекст";
  }

  return context;
};
