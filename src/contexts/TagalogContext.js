import React, { createContext, useState, useEffect } from 'react';
export const TagalogContext = createContext();

export const TagalogContextProvider = (props) => {
    const [adjectives, setAdjectives] = useState([]);

    // simulate an async call, as if we are calling an API
    const stall = async(stallTime = 2000) => {
        await new Promise(resolve => setTimeout(resolve, stallTime));
    }

    const getAdjectives = async () => {
        await stall();
        let adj = await Promise.resolve([
            { type: 'noun', latin: 'somnus', english: 'sleep', 'notes': 'somnus, somni'},
            { type: 'noun', latin: 'epulum', english: 'feast, banquet', 'notes': 'epulum, epuli'},
            { type: 'verb', latin: 'premo', english: 'press, pursue', 'notes': 'premere, pressi, pressum'},
            { type: 'noun', latin: 'fames', english: 'hunger, famine, want, craving', 'notes': 'fames, famis'},
            { type: 'noun', latin: 'eruptio', english: 'sortie, rush, sally', 'notes': 'eruptio, eruptionis'},
            { type: 'verb', latin: 'consero', english: 'fasten, connect, entwine, tie, join or bind into a whole, unite, bring together, (with manum or manus) engage in close combat, join battle', 'notes': 'consere, conserui, consertum'},
            { type: 'verb', latin: 'adimo', english: 'take away, deprive of, snatch away, carry off; steal; capture, remove, save, rescue', 'notes': 'adimere, ademi, ademptum'},
            { type: 'verb', latin: 'premo', english: 'press, pursue', 'notes': 'premere, pressi, pressum'},
            { type: 'noun', latin: 'fames', english: 'hunger, famine, want, craving', 'notes': 'fames, famis'},
            { type: 'noun', latin: 'audaciae', english: 'boldness, daring, courage, confidence; recklessness, effrontery, audacity', 'notes': 'audacia, audaciae'},
            { type: 'adjective', latin: 'audax', english: 'bold, daring, courageous', 'notes': 'audax, audacis, audacior -or -us, audacissimus -a -um'},
            { type: 'verb', latin: 'supplico', english: 'pray', 'notes': 'supplicare, supplicavi, supplicatum'},
            { type: 'verb', latin: 'portendo', english: 'foretell', 'notes': 'portendere, portendi, portentum'},
            { type: 'noun', latin: 'probitas', english: 'honesty', 'notes': 'probitatis, f'},
            { type: 'adjective', latin: 'modicus', english: 'moderate, unambitious', 'notes': 'modica, modicum'},
            { type: 'noun', latin: 'facundia', english: 'eloquence', 'notes': 'facundae'},
            { type: 'noun', latin: 'munditia', english: 'elegance, refinement', 'notes': 'munditia, munditium'},
            { type: 'adjective', latin: 'nocturnus', english: 'of the night', 'notes': '-a -um'},
            { type: 'noun', latin: 'torus', english: 'couch', 'notes': ' -i'},
            { type: 'noun', latin: 'miseratio', english: 'pity', 'notes': '-onis'},
            { type: 'verb', latin: 'interpretor', english: 'interpret, understand', 'notes': '-ari -atus sum'},
            { type: 'verb', latin: 'facundia', english: 'eloquence', 'notes': 'facundae'},
            { type: 'verb', latin: 'expavesco', english: 'be terrified', 'notes': '-ere expavi'},
            { type: 'verb', latin: 'imaginor', english: 'imagine, think', 'notes': '-ari -atus sum'},
            { type: 'noun', latin: 'scrinium', english: 'small writing desk', 'notes': '-i'},
            { type: 'verb', latin: 'tempto', english: 'test, try; urge; worry; bribe', 'notes': 'temptare, temptavi, temptatus'},
            { type: 'verb', latin: 'cedo', english: 'go/pass (from/away), grant, concede, yield, submit', 'notes': 'cedere, cessi, cessus'},
            { type: 'noun', latin: 'vota', english: 'vow, pledge, religious undertaking/promise, vote', 'notes': 'votum, voti'},
            { type: 'verb', latin: 'divello', english: 'tear away', 'notes': 'divellere'},
            { type: 'noun', latin: 'atavus', english: 'ancestor, forefather', 'notes': '-i'},
            { type: 'noun', latin: 'truncus', english: 'trunk', 'notes': '-i'},
            { type: 'noun', latin: 'mundi', english: 'universe, heavens; world, mankind', 'notes': 'mundus, mundi'},
            { type: 'noun', latin: 'ramum', english: 'branch, bough', 'notes': 'ramus, rami'},
            { type: 'verb', latin: 'monstro', english: 'show; point out, reveal; advise, teach', 'notes': 'monstrare, monstravi, monstratus'},
            { type: 'noun', latin: 'opes', english: 'power, might; help; influence; resources/wealth', 'notes': 'ops, opis'},
            { type: 'verb', latin: 'fulgeo', english: 'flash, shine; glow, gleam, glitter, shine forth, be bright', 'notes': 'fulgere, fulsi'},
            { type: 'verb', latin: 'adeo', english: 'approach; attack; visit, address; undertake', 'notes': 'adeo, adire, adivi, aditus'},
            { type: 'verb', latin: 'mollio', english: 'relieve, ease', 'notes': '-ire'},
            { type: 'noun', latin: 'aversus', english: 'return, going back', 'notes': '-a -um'},
            { type: 'noun', latin: 'trames', english: 'track, path', 'notes': '-itis'},
            { type: 'verb', latin: 'intueor', english: 'look at, upon or towards, consider, regard, observe, regard with admiration, wonder at', 'notes': 'intueri, intuitus sum'},
            { type: 'verb', latin: 'praeficio', english: 'put in command', 'notes': 'praeficere, praefeci, praefectum'},
            { type: 'noun', latin: 'habitus', english: 'appearance, expression', 'notes': '-us'},
            { type: 'noun', latin: 'lineamentum', english: 'line, feature', 'notes': '-i'},
            { type: 'adjective', latin: 'strenuus', english: 'energetic', 'notes': '-a, -um'},
            { type: 'noun', latin: 'calor', english: 'heat', 'notes': 'caloris'},
            { type: 'adjective', latin: 'habilis', english: 'fit, apt, suitable', 'notes': '-e'},
            { type: 'noun', latin: 'vicis', english: 'succession, change of season', 'notes': 'vicis, f'},
            { type: 'noun', latin: 'latebra', english: 'hiding place, subterfuge, retreat', 'notes': 'ae, f'},
            { type: 'noun', latin: 'patientiae', english: 'ability to endure', 'notes': '-ae, f'},
        ])
        setAdjectives(adj);
    }

    useEffect(() => {
        getAdjectives();
    }, [])

    return (
        <TagalogContext.Provider value={{adjectives}}>
            {props.children}
        </TagalogContext.Provider>
    )

}

