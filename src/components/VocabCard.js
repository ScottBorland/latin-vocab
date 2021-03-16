import React, { useState } from 'react';
import { Card } from 'react-bootstrap'
 
export const VocabCard = (props) => {
    const [isFlipped, setIsFlipped] = useState(false)

    return (
        <div className="mt-3 mb-3">
            <Card className="m-auto" bg={isFlipped ? "blue": "blue"}
            text={isFlipped ? "dark" :"dark"} border="warning"
            style={{ width: '18rem' }}
            onClick={() => { setIsFlipped(!isFlipped)}}>
                <Card.Header>{props.type}</Card.Header>
                <Card.Body>
                    <Card.Title>
                        {isFlipped ? props.english : props.latin}
                    </Card.Title>
                    <Card.Text>{isFlipped ? ' ' : props.notes}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

