import { Header } from '../header/header';
import { Info } from '../info/info';

export function Layout() {
    return (
        <div className="container">
            <Header></Header>
            <Info></Info>
        </div>
    );
}
