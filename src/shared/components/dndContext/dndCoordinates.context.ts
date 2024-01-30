import { Coordinates } from "@dnd-kit/core/dist/types";
import { createContext } from "react";

export const CoordinateContext = createContext<Coordinates>({ x: 0, y: 0 });
