import { useContext } from 'react';
import { WindowContext } from './window.context';

export const useWindow = () => useContext(WindowContext);