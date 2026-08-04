interface SidebarProps {
    onLoadMap?: () => void;
    onAddToken?: () => void;
    onSave?: () => void;
    onLoad: () => void;
}

export function Sidebar({
    onLoadMap,
    onAddToken,
    onSave,
    onLoad
}: SidebarProps) {
    return (
        <aside className="sidebar">
            <button onClick={onLoadMap}>Karte laden</button>
            <button onClick={onAddToken}>Token hinzufügen</button>
            <div className="sidebar-spacer" />
            <button onClick={onSave}>Speichern</button>
            <button onClick={onLoad}>Laden</button>
        </aside>
    );
}