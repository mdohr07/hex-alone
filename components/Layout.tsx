import { useState } from 'react';
import { MapCanvas } from './MapCanvas';
import { Sidebar } from './Sidebar';

export function Layout() {
    const [mapImageUrl, setMapImageUrl] = useState<string | null>(null);
    
    function handleMapFileSelected(file: File) {
        const url = URL.createObjectURL(file);
        setMapImageUrl(url);
    }

    return (
        <div className="layout">
            {/* TODO function not implemented */}
            <Sidebar
                onLoadMap={handleMapFileSelected}
                onLoadGame={function (): void {
                    throw new Error('Function not implemented.');
                }} />
            <MapCanvas imageUrl={mapImageUrl} />
        </div>
    );
}

