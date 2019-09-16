import React, { Component } from 'react'

// w taki sposób tworzymy komponent stanowy
class StateComponent extends Component {
	constructor(props) {
		super(props)
		// this === StateComponent

        // przez property this.state, które jest obiektem tworzymy stan komponentu
        // stan to taka komórka pamięci przypisana do danego komponentu aby mógł on działać możliwie niezależnie
		this.state = {
			imBusy: false, // stan mówiący czy komponent jest zajęty
			textInInput: '', // stan mówiący o wartości inputa który jest w komponencie
		}

		// jeśli w metodzie będziemy używać "this" to trzeba tą metodę "przypiąć" do "this" w poniższy sposób
		this.setInputValue = this.setInputValue.bind(this)
	}

	// tak tworzymy metody danego komponentu - czyli logikę działania
	setInputValue(event) {
        // aby pobrać aktualną wartość (value) inputa musimy odzyskać ją z eventu
        const { value } = event.target

        // aby wrzucić wartość inputa do stanu używamy wbudowanej metody this.setState
        // do this.setState wrzucamy obiekt podobny do obiektu stanu, który chcemy zmienić a react zrobi resztę
        this.setState({
            textInInput:value
        })

    }

	render() {
		// dzięki stanowi bądź propsom możemy warunkowo renderować różne części komponentu
		const { imBusy, textInInput } = this.state

		if (imBusy) {
			return (
				<div>
                    <span>loading...</span>
                    
                    {/* w poniższy sposób możemy sprawdzić aktualny stan komponentu, podczas gdy go projektujemy */}
                    {JSON.stringify(this.state)}
				</div>
			)
		} else {
			return (
                <div>
                    {/* każdy input ma metodę onChange, która zwraca event wykonywanego w danym inpucie */}
                    {/* zawsze pilnujemy aby prop value oraz stan textInInput były identyczne poprzez 
                    ustawienie w inpucie propsa value i wrzucenie w niego aktualnej wartości stanu textInInput - "value={textInInput}" */}
					<input type={'text'} value={textInInput} onChange={this.setInputValue} />
                    <div>
                    
                    {/* w ten sposób możemy używać wartości przypisanej do danego stanu */}
						<small>{textInInput}</small>
					</div>
				</div>
			)
		}
	}
}
