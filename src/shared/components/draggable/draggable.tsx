import { useDraggable } from "@dnd-kit/core";
import { PropsWithChildren, useMemo } from "react";
import { useDraggableContext } from "../dndContext/dndCoordinates.hooks";
import { DraggableListenersContext } from "./draggableListeners.context";

export function Draggable({ children }: PropsWithChildren) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });

  const { x, y } = useDraggableContext();

  const style = transform
    ? {
        left: x,
        top: y,
        transform: `translate3d(${transform.x}px, ${
          transform.y ?? 0
        }px, 0) scale(1.01)`,
      }
    : { left: x, top: y };

  const draggableListeners = useMemo(() => listeners, [listeners, transform]);

  console.log(draggableListeners);

  return (
    <div
      ref={setNodeRef}
      style={{ position: "absolute", ...style }}
      {...attributes}
    >
      <DraggableListenersContext.Provider value={draggableListeners}>
        {children}
      </DraggableListenersContext.Provider>
    </div>
  );
}
