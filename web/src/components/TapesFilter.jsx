import tf from './TapeFilters.module.css';
import g from '../global.module.css';

function TapeFilters () {
    return (
        <div className={tf['filters-container']}>
            <form>
                <div className={g['form-group']}>
                    <h4>Artists</h4>
                    <label>
                        <input type="checkbox" name="artist" value="artist1" />
                        Artist Name
                    </label>
                    <input type="submit" value="Apply" className={g['button']} />
                </div>
            </form>
            <form className={g['form-group']}>
                <h4>Search</h4>
                <input type="text" placeholder="Search..." className={tf['search-box']} />
                <div>
                    <input type="submit" value="Search" className={g['button']} />
                </div>
            </form>
        </div>
    );
};

export default TapeFilters;