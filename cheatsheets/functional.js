import React from 'react'

// Komponenty funkcyjne
const Header = (props) => {
    // props to obiekt który ma w sobie wszystkie properties przekazane do komponentu
    const { text } = props
    // aby wybrać poszczególny prop, wystarczy wg tej składni odwołać się do klucza
    // aby wyświetlić aktualną wartość propa text stosujemy składnie "{text}"
	return <div>{text}</div>
}
 
// w taki sposób przekazujemy do komponentu "Header" prop "text"
const View = (props) => {
	return (
		<div>
			<Header text={'jakiś text headera'} />
		</div>
	)
}

// jest specjalny props - "children", który oznacza dzieci danego komponentu
// w miejscu gdzie wstawimy "children", wyrenderdują się dzieci przekazane do danego komponentu
const WrapperComponent = ({ children }) => {
	return <div className="wrapper">{children}</div>
}

// w taki sposób przekazujemy do komponentu "WrapperComponent" inne komponenty-dzieci
const View = (props) => {
	return (
        <div>
            <WrapperComponent>
                <Header text={'text1'}/>
                <Header text={'text2'}/>
                <Header text={'text3'}/>
                <Header text={'text4'}/>
            </WrapperComponent>
		</div>
	)
}
