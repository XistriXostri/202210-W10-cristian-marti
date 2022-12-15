export function Info({
    totalSelected,
    handleSelectAll,
}: {
    totalSelected: number;
    handleSelectAll: () => void;
}) {
    return (
        <section className="controls">
            <p className="info">{totalSelected} gentlemen pointing at you</p>
            <button
                className="button button--select"
                onClick={() => handleSelectAll()}
            >
                Select all
            </button>
        </section>
    );
}
