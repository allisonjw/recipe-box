import React from 'react';
import { HotKeys } from 'react-hotkeys';

const KEY_MAP = {
    DELETE: ["del", "backspace"],
    ENTER: ["return", "enter"]
};

export const KeyMap = ({ children }) => (
  <HotKeys keyMap={KEY_MAP}>{children}</HotKeys>
);