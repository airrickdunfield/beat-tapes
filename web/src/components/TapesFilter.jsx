import { useState, useEffect } from 'react';

import tf from './TapeFilters.module.css';
import g from '../global.module.css';



function TapeFilters (   ) {

    return (
        <div className={tf['filters-container']}>
            <form>
                <div className={g['form-group']}>
                    <h4>Artists</h4>
                    <label>
                        <input type="checkbox" name="artist" />
                        Artist Name
                    </label>
                    <input type="submit" value="Apply" className={g['button']} />
                </div>
            </form>
        </div>
    );
};

export default TapeFilters;