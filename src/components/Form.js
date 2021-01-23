import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import useForm from '../hooks/useForm';
import isValidForm from '../helpers/isValidForm';

const Form = ( { setCitas } ) => {
    const [ formValues, handleInputChange, reset ] = useForm( { pet: '', owner: '', date: '', time: '', symptoms: '' } );
    const { pet, owner, date, time, symptoms } = formValues;

    const [ disabled, setDisabled ] = useState( false );

    const [ petError, setPetError ] = useState( null );
    const [ ownerError, setOwnerError ] = useState( null );
    const [ dateError, setDateError ] = useState( null );
    const [ timeError, setTimeError ] = useState( null );
    const [ symptomsError, setSymptomsError ] = useState( null );

    const handleSubmit = ( event ) => {
        event.preventDefault();
        setDisabled( true );

        const { msgErrorPet, msgErrorOwner, msgErrorDate, msgErrorTime, msgErrorSymptoms, isValid } = isValidForm( pet, owner, date, time, symptoms );

        setPetError( msgErrorPet );
        setOwnerError( msgErrorOwner );
        setDateError( msgErrorDate );
        setTimeError( msgErrorTime );
        setSymptomsError( msgErrorSymptoms );

        if( isValid ) {
            const id = uniqid();

            setCitas( ( citas ) => [ ...citas, { id, pet, owner, date, time, symptoms } ] );

            reset();
        }

        setDisabled( false );
    };

    return (
        <>
            <h2>Crear cita</h2>

            { petError && <p className="alerta-error">{ petError }</p> }
            { ownerError && <p className="alerta-error">{ ownerError }</p> }
            { dateError && <p className="alerta-error">{ dateError }</p> }
            { timeError && <p className="alerta-error">{ timeError }</p> }
            { symptomsError && <p className="alerta-error">{ symptomsError }</p> }

            <form autoComplete="off" onSubmit={ handleSubmit }>
                <input
                    type="text"
                    placeholder="Nombre mascota"
                    className="u-full-width"
                    name="pet"
                    value={ pet }
                    onChange={ handleInputChange }
                />

                <input
                    type="text"
                    placeholder="Nombre del dueño"
                    className="u-full-width"
                    name="owner"
                    value={ owner }
                    onChange={ handleInputChange }
                />

                <input
                    type="date"
                    className="u-full-width"
                    name="date"
                    value={ date }
                    onChange={ handleInputChange }
                />

                <input
                    type="time"
                    className="u-full-width"
                    name="time"
                    value={ time }
                    onChange={ handleInputChange }
                />

                <textarea
                    placeholder="Síntomas..."
                    className="u-full-width"
                    name="symptoms"
                    value={ symptoms }
                    onChange={ handleInputChange }
                >
                </textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                    disabled={ disabled }
                >
                    Agregar cita
                </button>
            </form>
        </>
    );
};

Form.propTypes = {
    setCitas: PropTypes.func.isRequired
};

export default Form;
