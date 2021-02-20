import React from 'react';
import './Tracker.scss';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { InputGroup, FormControl } from 'react-bootstrap';
const Tracker = () => {
    return (
        <div className="tracker">
            <div className="entry">
                <div className="entry__input">
                    <input type="text" />
                </div>
                <div className="entry__input">
                    <div className="entry__prepend">
                        <div className="entry__prepend-text">
                            $
                        </div>
                        <input type="text" />
                    </div>
                </div>
                <div className="entry__input">
                    <select>
                        <option>Housing</option>
                    </select>
                </div>
                <div className="entry__input">
                    <select>
                        <option>Rent</option>
                    </select>
                </div>
                <div className="entry__input">
                    <Button>Add New Entry</Button>
                </div>
            </div>
        </div>
    )
}

export default Tracker;