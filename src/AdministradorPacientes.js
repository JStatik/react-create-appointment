import React, { useEffect, useState } from 'react';
import Cita from './components/Cita';
import Form from './components/Form';

const AdministradorPacientes = () => {
    const [ citas, setCitas ] = useState( JSON.parse( localStorage.getItem( 'apa' ) )?.citas || [] );

    useEffect( () => {
        localStorage.setItem( 'apa', JSON.stringify( { citas } ) );
    }, [ citas ] );

    return (
        <>
            <h1>Administrador de Pacientes</h1>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Form setCitas={ setCitas } />
                    </div>

                    <div className="one-half column">
                        <h2>{ citas.length === 0 ? 'Agrega una nueva cita' : 'Administra tus citas' }</h2>

                        {
                            citas.map( cita => (
                                <Cita key={ cita.id } cita={ cita } setCitas={ setCitas }  />
                            ) )
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdministradorPacientes;
