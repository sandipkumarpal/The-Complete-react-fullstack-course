import React from 'react';
import ErrorMessage from './ErrorMessage';

function FormField(props) {
    const { formData, id, change} = props;
    let formTemplate = null;
    switch(formData.element) {
        case ('input'):
            formTemplate = (
                <div>
                    <input 
                        {...formData.config}
                        value={formData.value}
                        onBlur={(event) => change({event, id, blur: true})}
                        onChange={(event) => change({event, id, blur: false})}
                    />
                    {formData.validation && !formData.valid ? 
                        <ErrorMessage 
                            message={formData.validationMessage} 
                        /> 
                    :
                        null
                    }
                </div>
            );
            break;
        default:
            formTemplate = null;
    }

    return formTemplate;
}

export default FormField;
