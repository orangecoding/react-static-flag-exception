import SomeFancyComponent from './broken/SomeFancyComponent';

import React from 'react';

function App() {

    const [data, setData] = React.useState(null);

    React.useEffect(()=>{
        setTimeout(()=>setData('Hi'), 1000);
    }, []);

    return (
        <div className="App">
            <header className="App-header">

                <SomeFancyComponent data={data}/>
            </header>
        </div>
    )
}

export default App
