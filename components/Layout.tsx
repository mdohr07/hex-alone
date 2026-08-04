import { useState } from 'react';
import { MapCanvas } from './MapCanvas';
import { Sidebar } from './Sidebar';

const [mapImageUrl, setMapImageUrl] = useState<string | null>(null);

export function Layout() {
    return (
        <div className="layout">
            {/* TODO function not implemented */}
            <Sidebar
                onLoadMap={handleMapFileSelected}
                onLoadGame={function (): void {
                    throw new Error('Function not implemented.');
                }} />
            <MapCanvas imageUrl={null} />
        </div>
    );
}

function handleMapFileSelected(file: File) {
    const url = URL.createObjectURL(file);
    setMapImageUrl(url);
}