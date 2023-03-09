import React from "react";

export function Accordion(props : any) {
    console.log('Accordion rendering')

    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle({title}: any) {
    console.log('AccordionTitle rendering')

    return (
        <h3>{title}</h3>
    )
}

function AccordionBody() {
    console.log('AccodrionBody rendering')

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
