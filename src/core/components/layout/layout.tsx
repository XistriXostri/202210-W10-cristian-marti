import { Gentleman } from '../gentleman/gentleman';
import { Header } from '../header/header';
import { Info } from '../info/info';
import { useState } from 'react';
import { gentlemans } from '../../models/gentlemans';

export function Layout() {
    const [gentlemansArray, setGentleman] = useState(gentlemans);

    const totalSelected = gentlemansArray.filter(
        (gentleman) => gentleman.selected
    ).length;

    function handleSelectAll() {
        const newGentlemansArray = gentlemansArray.map((gentleman) => {
            return {
                ...gentleman,
                selected: true,
            };
        });
        setGentleman(newGentlemansArray);
    }

    function handleDelete(gentlemanId: number) {
        const newGentlemansArray = gentlemansArray.filter(
            (gentleman) => gentleman.id !== gentlemanId
        );
        setGentleman(newGentlemansArray);
    }

    function handleSelect(gentlemanId: number) {
        const newGentlemansArray = gentlemansArray.map((gentleman) => {
            if (gentleman.id === gentlemanId) {
                return {
                    ...gentleman,
                    selected: !gentleman.selected,
                };
            }
            return gentleman;
        });
        setGentleman(newGentlemansArray);
    }

    return (
        <div className="container">
            <Header></Header>
            <Info
                totalSelected={totalSelected}
                handleSelectAll={handleSelectAll}
            ></Info>
            <Gentleman
                gentlemansArray={gentlemansArray}
                handleDelete={handleDelete}
                handleSelect={handleSelect}
            ></Gentleman>
        </div>
    );
}
