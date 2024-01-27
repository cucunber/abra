import 'react';

declare module 'react' {
    interface JSXElementConstructor {
        id: string
    }
}