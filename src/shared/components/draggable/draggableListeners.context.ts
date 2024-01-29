import { DraggableSyntheticListeners } from "@dnd-kit/core";
import { createContext } from "react";

export const DraggableListenersContext =
  createContext<DraggableSyntheticListeners>({});
