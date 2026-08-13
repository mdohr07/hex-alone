import { useState } from 'react';
import { MapCanvas } from './MapCanvas';
import { Sidebar } from './Sidebar';
import type { Token } from '../types';

export function Layout() {
    const [mapImageUrl, setMapImageUrl] = useState<string | null>(null);
    const [tokens, setTokens] = useState<Token[]>([]);
    
    function handleMapFileSelected(file: File) {
        const url = URL.createObjectURL(file);
        setMapImageUrl(url);
    }

    function handleAddToken () { const newToken = {
        id: crypto.randomUUID(),
        mapId: mapImageUrl ?? 'unknown',
        label: `Token ${tokens.length + 1}`,
        color: '#c96a4e',
        position: { x: 100, y: 100 },
    };
    setTokens([...tokens, newToken]);
}

    return (
        <div className="layout">
            {/* TODO function not implemented */}
            <Sidebar
                onLoadMap={handleMapFileSelected}
                onAddToken={handleAddToken}
                onLoadGame={function (): void {
                    throw new Error('Function not implemented.');
                }} />
            <MapCanvas imageUrl={mapImageUrl} tokens={tokens} />
        </div>
    );
}

