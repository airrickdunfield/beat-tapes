import { useState, useEffect } from 'react';
import TapeFilters from '../components/TapesFilter';
import AddTapeModal from '../components/AddTapeModal';
import g from '../global.module.css';


function AllTapes() {

    const [tapes, setTapes] = useState([]);

    // We have moved the fetchTapes to a funciton, because we want to call it both when the component mounts and when a new tape is added
    const fetchTapes = async () => {
        const response = await fetch('http://localhost:3000/tapes');
        const data = await response.json();
        console.log(data);
        setTapes(data);
    }

    // When the component is displayed, fetch the tapes
    useEffect(() => {

        fetchTapes();

    }, []);

    return (
        
        <main className={g['container']}>
            <h2>Lofi Cassettes</h2>
            <div className={g['grid-container']}>
                <div className={g['col-3']}>
                        <h3>Filters</h3>
                        <TapeFilters />
                </div>
                <div className={g['col-9']}>
                    <div className={`${g['flex']} ${g['space-between']} ${g['items-center']}`}>
                        <h3>My Collection</h3>
                        {/* Pass the funciton to the AddTapeModal component down to the child */}
                        <AddTapeModal onTapeAdded={fetchTapes} />
                    </div>
                    <div className={g['grid-container']}>

                        {tapes.map( tape => {
                            return (
                                <div key={tape.id}  className={`${g['col-4']} ${g['flex']} ${g['flex-grow']}`}>
                                    <div className={`${g['card']}`}>
                                        <img src={`http://localhost:3000/images/${tape.image_name}`} alt="Placeholder" />
                                        <div className={g['card-content']}>
                                            <h4>{tape.title}</h4>
                                            <p>{tape.artist}</p>
                                            <a href={`/tapes/${tape.id}`} className={`${g['button']} ${g['small']}`}>Details</a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

        </main>
    )
}

export default AllTapes;
