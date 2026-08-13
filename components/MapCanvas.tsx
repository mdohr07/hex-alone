import type { Token } from "../types";

interface MapCanvasProps {
    imageUrl: string | null;
    tokens: Token[];
}

export function MapCanvas({ imageUrl, tokens }: MapCanvasProps) {
    return (
        <div className="map-canvas">
            {imageUrl && <img src={imageUrl} alt="Map" className="map-image" />}
            {tokens.map(token => (
                <div
                    key={token.id}
                    className="token"
                    style={{
                        left: token.position.x,
                        top: token.position.y,
                        backgroundColor: token.color,
                    }}
                    title={token.label}
                    />
            ))}
        </div>
    );
}