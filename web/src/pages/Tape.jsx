import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Tape() {

    const { id } = useParams();

    const [tapeData, setTapeData] = useState({});

    useEffect(() => {   

        // Fetch the tape with the id
        fetch(`http://localhost:3000/tapes/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setTapeData(data);
            });

    }, []);

    return (
        <div>
            <h1>Tape: {id}</h1>
        </div>
    );

}

export default Tape;