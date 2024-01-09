import './App.css';
import {Header} from './layout/header/Header';
import {Main} from './layout/sections/main/Main';
import {Amazing} from './layout/sections/amazing/Amazing';
import {Best} from './layout/sections/best/Best';
import {Popular} from './layout/sections/popular/Popular';
import {Subscribe} from './layout/sections/subscribe/Subscribe';


function App() {
    return (
        <>
            <Header/>
            <Main/>
            <Amazing/>
            <Best/>
            <Popular/>
            <Subscribe/>
        </>
    );
}

export default App;