interface TokenMenuProps {
        onAddToken?: () => void;
}

export function TokenMenu({
        onAddToken,
}: TokenMenuProps) {

    return (
        <div className="tokenMenu">
            <button onClick={onAddToken} className="addToken">+</button>
        </div>
    )
}