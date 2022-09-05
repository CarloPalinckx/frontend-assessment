import { WithClient } from './client';
import { render } from 'react-dom';

import App from './App';
import { MosTheme } from '@myonlinestore/bricks';

const rootElement = document.getElementById('root');
render(
    <WithClient>
        <MosTheme>
        <App />
        </MosTheme>
    </WithClient>,
    rootElement
);
