import './App.css';
import {Header} from './layout/header/Header';
import {Main} from './layout/sections/main/Main';
import {Amazing} from './layout/sections/amazing/Amazing';
import {Best} from './layout/sections/best/Best';


function App() {
    return (
        <>
            <Header/>
            <Main/>
            <Amazing/>
            <Best/>
        </>
    );
}

export default App;