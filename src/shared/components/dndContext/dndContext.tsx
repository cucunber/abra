import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { Coordinates } from "@dnd-kit/core/dist/types";
import { PropsWithChildren, useMemo, useState } from "react";
import { CoordinateContext } from "./dndCoordinates.context";

export const DraggableContext = ({ children }: PropsWithChildren) => {
  const [{ x, y }, setCoordinates] = useState<Coordinates>({ x: 0, y: 0 });
  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);

  const keyboardSensor = useSensor(KeyboardSensor, {});
  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);

  const contextCoordinates = useMemo(() => ({ x, y }), [x, y, setCoordinates]);

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={({ delta }) => {
        setCoordinates(({ x, y }) => {
          return {
            x: x + delta.x,
            y: y + delta.y,
          };
        });
      }}
    >
      <CoordinateContext.Provider value={contextCoordinates}>
        {children}
      </CoordinateContext.Provider>
    </DndContext>
  );
};
