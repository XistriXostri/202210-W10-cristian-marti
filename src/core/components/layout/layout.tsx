import { Gentleman } from '../gentleman/gentleman';
import { Header } from '../header/header';
import { Info } from '../info/info';

export function Layout() {
    return (
        <div className="container">
            <Header></Header>
            <Info></Info>
            <Gentleman></Gentleman>
        </div>
    );
}
