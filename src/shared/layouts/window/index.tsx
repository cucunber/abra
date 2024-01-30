import { PropsWithChildren, useMemo } from "react";
import { IWindow } from "./window.type";
import { Box, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import { CloseIcon, MinusIcon } from "@chakra-ui/icons";
import { processes, removeFromProcess } from "../../../features/process";
import { windows } from "../../../features/windows";
import { useAppSelector, useBindActionCreators } from "../../hooks/redux";
import { WINDOW_STATE } from "../../../entities/window/window.type";
import clsx from "clsx";

import s from "./window.module.css";
import { useDraggableListenersContext } from "../../components/draggable/draggableListeners.hooks";
import { WindowContext } from "./window.context";

const ACTION_CREATORS = {
  onClose: removeFromProcess,
  onCollapse: windows.actions.changeWinState,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectProcess = (pid: number) => (state: any) => {
  const allProcesses = processes.selectors.selectRunningProcesses(state);
  return allProcesses[pid];
};

export const Window = ({
  children,
  pid,
  className,
  ...properties
}: PropsWithChildren<IWindow>) => {
  const process = useAppSelector(selectProcess(pid));
  const { onClose, onCollapse } = useBindActionCreators(ACTION_CREATORS);
  const listeners = useDraggableListenersContext();

  const handleClose = () => {
    onClose(pid);
  };

  const handleCollapse = () => {
    onCollapse({ pid, state: WINDOW_STATE.COLLAPSED });
  };

  const windowName = process.program.meta.name;

  const value = useMemo(() => ({ pid }), [pid]);

  return (
    <WindowContext.Provider value={value}>
      <VStack gap="0" alignContent="initial" justify="initial" className={clsx(s.window, className)} {...properties}>
        <HStack className={s.panel}>
          <HStack w="100%" {...listeners}>
            <Text fontWeight="700" fontSize="sm">
              {windowName}
            </Text>
          </HStack>
          <HStack className={s.controls}>
            <IconButton
              size="xs"
              aria-label="close"
              onClick={handleCollapse}
              icon={<MinusIcon />}
            />
            <IconButton
              size="xs"
              aria-label="close"
              onClick={handleClose}
              icon={<CloseIcon />}
            />
          </HStack>
        </HStack>
        <Box flex="1" className={s.content}>{children}</Box>
      </VStack>
    </WindowContext.Provider>
  );
};
