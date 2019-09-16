import React from 'react';


// w JSX występują elementy
const JSXElement = (<h1>to jest element JSX</h1>);

// oraz komponenty
const JSXComponent = (props)=>{
    // console.log('properies które wchodzą do komponentu', props)
    return (
        <div>
            <h1>to jest komponent JSX</h1>
        </div>
    )
}

// PROPERTIES
const SomeComponent = ({text}) =>{
    // {text} oznacza -> weź wartość przypisaną do property text
    return (
        <div>
        {/* komentarze robimy tak */}
        {/* aby użyć zmiennej text używamy poniższej składni */}
            {text}
        </div>
    )
}


// CSS CLASSES
const SomeComponentWithClassName = (props) =>{
    return (
        <div>
            {/* aby dodać klasę CSS do komponentu robimy to przez property "className" */}
            <h2 className="text-danger">jakiś tekst</h2>
        </div>
    )
}


// STYLING
const SomeComponentWithStyle = (props) =>{
    const wantedStyle = {
        color:'red'
    }

    return (
        <div>
            {/* aby dodać style do komponentu dodajemy je jako obiekt, a nie jako string (tak jak jest w zwyklym htmlu) */}
            <h2 style={wantedStyle}>jakiś tekst</h2>
        </div>
    )
}
