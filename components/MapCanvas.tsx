import React, { useRef, useState } from "react";
import type { Token } from "../types";

interface MapCanvasProps {
    imageUrl: string | null;
    tokens: Token[];
    onTokenMove: (id: string, position: {x: number; y: number }) => void;
    onTokenPlacement: (id: string, position: { x: number; y: number }) => void;
}

export function MapCanvas({ imageUrl, tokens, onTokenMove, onTokenPlacement }: MapCanvasProps) {
    const canvasRef = useRef<HTMLDivElement>(null);
    const [draggingId, setDraggingId] = useState<string | null>(null);

    function handleMouseDown(id: string) {
        setDraggingId(id);
    }

    function handleMouseMove(e: React.MouseEvent) {
        e.preventDefault();
        if (!draggingId || !canvasRef.current) { return; }

        const rect = canvasRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        onTokenMove(draggingId, {x, y });     
    }

    function handleMouseUp() {
        setDraggingId(null)
    }

    function handleDragOver(e:React.DragEvent) {
        e.preventDefault(); // needed, otherwise onDrop is not triggered
    }

    function handleDrop(e:React.DragEvent) {
        e.preventDefault();
        if (!canvasRef.current) return;

        const id = e.dataTransfer.getData('tokenId');
        const rect = canvasRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        onTokenPlacement(id, {x, y});
    }

    return (
        <div
            ref={canvasRef} 
            className="map-canvas"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
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
                    onMouseDown={() => handleMouseDown(token.id)}
                    />
            ))}

        </div>
    );
}