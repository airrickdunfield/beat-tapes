import TapeFilters from '../components/TapesFilter';
import g from '../global.module.css';

function AllTapes() {
    return (
        <main className={g['container']}>
            <h2>Lofi Cassettes</h2>
            <div className={g['grid-container']}>
                <div className={g['col-3']}>
                    <h3>Filters</h3>
                    <TapeFilters />
                </div>
                <div className={g['col-9']}>
                    <h3>My Collection</h3>
                    <div className={g['grid-container']}>
                        <div className={g['col-4']}>
                            <div className={g['card']}>
                                <img src="https://place-hold.it/300" alt="Placeholder" />
                                <div className={g['card-content']}>
                                    <h4>Album Title</h4>
                                    <p>Artist Name</p>
                                </div>
                            </div>
                        </div>
                        <div className={g['col-4']}>
                            <div className={g['card']}>
                                <img src="https://place-hold.it/300" alt="Placeholder" />
                                <div className={g['card-content']}>
                                    <h4>Album Title</h4>
                                    <p>Artist Name</p>
                                </div>
                            </div>
                        </div>
                        <div className={g['col-4']}>
                            <div className={g['card']}>
                                <img src="https://place-hold.it/300" alt="Placeholder" />
                                <div className={g['card-content']}>
                                    <h4>Album Title</h4>
                                    <p>Artist Name</p>
                                </div>
                            </div>
                        </div>
                        <div className={g['col-4']}>
                            <div className={g['card']}>
                                <img src="https://place-hold.it/300" alt="Placeholder" />
                                <div className={g['card-content']}>
                                    <h4>Album Title</h4>
                                    <p>Artist Name</p>
                                </div>
                            </div>
                        </div>
                        <div className={g['col-4']}>
                            <div className={g['card']}>
                                <img src="https://place-hold.it/300" alt="Placeholder" />
                                <div className={g['card-content']}>
                                    <h4>Album Title</h4>
                                    <p>Artist Name</p>
                                </div>
                            </div>
                        </div>
                        <div className={g['col-4']}>
                            <div className={g['card']}>
                                <img src="https://place-hold.it/300" alt="Placeholder" />
                                <div className={g['card-content']}>
                                    <h4>Album Title</h4>
                                    <p>Artist Name</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default AllTapes;
