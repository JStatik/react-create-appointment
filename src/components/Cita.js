import React from 'react';
import PropTypes from 'prop-types';

const Cita = ( { cita, setCitas } ) => {
    const { id, pet, owner, date, time, symptoms } = cita;

    const handleClick = ( id ) => {
        setCitas(
            ( citas ) => citas.filter( cita => {
                return cita.id !== id;
            } )
        );
    };

    return (
        <div className="cita">
            <p>Mascota: <span>{ pet }</span></p>
            <p>Dueño: <span>{ owner }</span></p>
            <p>Fecha: <span>{ date }</span></p>
            <p>Hora: <span>{ time }</span></p>
            <p>Síntomas: <span>{ symptoms }</span></p>

            <button
                className="button-eliminar u-full-width"
                onClick={ () => handleClick( id ) }
            >
                Eliminar &times;
            </button>
        </div>
    );
};

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    setCitas: PropTypes.func.isRequired
};

export default Cita;
