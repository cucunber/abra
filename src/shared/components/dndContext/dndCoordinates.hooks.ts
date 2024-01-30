import { useContext } from "react";
import { CoordinateContext } from "./dndCoordinates.context";

export const useDraggableContext = () => {
  const context = useContext(CoordinateContext);

  if (!context) {
    throw "Оберни в контекст";
  }

  return context;
};
