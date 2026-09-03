import { useState } from 'react';
import { MapCanvas } from './MapCanvas';
import { Sidebar } from './Sidebar';
import type { Token } from '../types';
import { TokenMenu } from './TokenMenu';

export function Layout() {
    const [mapImageUrl, setMapImageUrl] = useState<string | null>(null);
    const [tokens, setTokens] = useState<Token[]>([]);
    const [tokenMenuOpen, setTokenMenuOpen] = useState(false);

    function handleMapFileSelected(file: File) {
        const url = URL.createObjectURL(file);
        setMapImageUrl(url);
    }

    function handleAddToken() {
        const newToken = {
            id: crypto.randomUUID(),
            mapId: mapImageUrl ?? 'unknown',
            label: `Token ${tokens.length + 1}`,
            color: '#c96a4e',
            position: { x: 100, y: 100 },
            placed: false
        };
        setTokens([...tokens, newToken]);
    }

    function handleTokenMove(id: string, position: { x: number; y: number }) {
        setTokens(tokens.map(token =>
            token.id === id ? { ...token, position } : token
        ));
    }

    function handleTokenPlacement(id: string, position: { x: number; y: number; }) {
        setTokens(tokens.map(tkn =>
            tkn.id === id ? { ...tkn, position, placed: true } : tkn
        ));
    }


    return (
        <div className="layout">
            <Sidebar
                onLoadMap={handleMapFileSelected}
                onToggleTokenMenu={() => setTokenMenuOpen(prev => !prev)}
                onLoadGame={function (): void {
                    throw new Error('Function not implemented.');
                }}
            />

            <MapCanvas
                imageUrl={mapImageUrl}
                tokens={tokens.filter(tkn => tkn.placed)}
                onTokenMove={handleTokenMove}
                onTokenPlacement={handleTokenPlacement}
            />

            {tokenMenuOpen && (
                <TokenMenu onAddToken={handleAddToken} tokens={tokens} />
            )}
        </div>
    );
}

