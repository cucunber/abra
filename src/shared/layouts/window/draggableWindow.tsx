import { PropsWithChildren } from "react";
import { DraggableContext } from "../../components/dndContext/dndContext";
import { Draggable } from "../../components/draggable";
import { IWindow } from "./window.type";
import { Window } from ".";

export const DraggableWindow = ({
  ...properties
}: PropsWithChildren<IWindow>) => {
  return (
    <DraggableContext>
      <Draggable>
        <Window {...properties} />
      </Draggable>
    </DraggableContext>
  );
};
