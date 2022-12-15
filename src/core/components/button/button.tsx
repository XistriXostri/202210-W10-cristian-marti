export function Button({
    className,
    handleClick,
    id,
}: {
    className: string;
    handleClick: (id: number) => void;
    id: number;
}) {
    return (
        <>
            <i
                className={className}
                onClick={() => {
                    handleClick(id);
                }}
            >
                {' '}
            </i>
        </>
    );
}
