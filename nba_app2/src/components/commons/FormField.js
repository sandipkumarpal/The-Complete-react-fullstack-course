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
        case ('select'):
            formTemplate = (
                <div>
                    <select 
                        name={formData.config.name}
                        value={formData.value}
                        onBlur={(event) => change({event, id, blur: true})}
                        onChange={(event) => change({event, id, blur: false})}
                    >
                        {formData.config.options.map((item, i) =>  
                            <option key={i} value={item.id}>{item.name}</option>    
                        )}
                    </select>
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
