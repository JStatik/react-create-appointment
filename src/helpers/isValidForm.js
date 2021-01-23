import validator from 'validator';
import moment from 'moment';
import 'moment/locale/es';

const isValidForm = ( pet, owner, date, time, symptoms ) => {
    const dateMoment = moment( date );
    
    const petEscape = validator.escape( pet );
    const ownerEscape = validator.escape( owner );
    const timeEscape = validator.escape( time );
    const symptomsEscape = validator.escape( symptoms );

    if( petEscape.trim().length === 0 || petEscape.trim().length < 2 || validator.isEmpty( petEscape ) ) {
        return {
            msgErrorPet: 'Ingrese un nombre de mascota válido.',
            msgErrorOwner: null,
            msgErrorDate: null,
            msgErrorTime: null,
            msgErrorSymptoms: null,
            isValid: false
        };
    } if( ownerEscape.trim().length === 0 || ownerEscape.trim().length < 2 || validator.isEmpty( ownerEscape ) ) {
        return {
            msgErrorPet: null,
            msgErrorOwner: 'Ingrese un nombre de propietario válido.',
            msgErrorDate: null,
            msgErrorTime: null,
            msgErrorSymptoms: null,
            isValid: false
        };
    } if( !dateMoment.isValid() ) {
        return {
            msgErrorPet: null,
            msgErrorOwner: null,
            msgErrorDate: 'Ingrese una fecha para el alta de la cita válida.',
            msgErrorTime: null,
            msgErrorSymptoms: null,
            isValid: false
        };
    } if( timeEscape.trim().length !== 5 || !timeEscape.includes( ':' ) || validator.isEmpty( timeEscape ) ) {
        return {
            msgErrorPet: null,
            msgErrorOwner: null,
            msgErrorDate: null,
            msgErrorTime: 'Ingrese una hora para el alta de la cita válida.',
            msgErrorSymptoms: null,
            isValid: false
        };
    } if( symptomsEscape.trim().length < 10 || validator.isEmpty( symptomsEscape ) ) {
        return {
            msgErrorPet: null,
            msgErrorOwner: null,
            msgErrorDate: null,
            msgErrorTime: null,
            msgErrorSymptoms: 'Ingrese una breve descripción de los síntomas. Al menos 10 caracteres.',
            isValid: false
        };
    }

    return { 
        msgErrorPet: null,
        msgErrorOwner: null,
        msgErrorDate: null,
        msgErrorTime: null,
        msgErrorSymptoms: null,
        isValid: true
    };
};

export default isValidForm;
