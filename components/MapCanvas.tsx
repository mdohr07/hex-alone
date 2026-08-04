interface MapCanvasProps {
    imageUrl: string | null;
}

export function MapCanvas({ imageUrl }: MapCanvasProps) {
    return (
        <div className="map-canvas">
            {imageUrl && <img src={imageUrl} alt="Map" className="map-image" />}
        </div>
    );
}