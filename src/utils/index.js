import React, { useEffect } from 'react';
//device detection
export const isIpad = typeof navigator !== `undefined` ? /iPad/i.test(navigator.userAgent) : null;
export const isMobile = typeof navigator !== `undefined` ? /iPhone|iPod|Android/i.test(navigator.userAgent) : null;
