import React from 'react';

class FormFields extends React.Component {
    constructor(props) {
        super(props);
        this.renderFields = this.renderFields.bind(this);
        this.renderTemplate = this.renderTemplate.bind(this);
        this.showLabel = this.showLabel.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.validData = this.validData.bind(this);
        this.showValidation = this.showValidation.bind(this);
    }

    renderFields() {
        let formArray = [];
        for (const element in this.props.formData) {
            formArray.push({
                id: element,
                settings: this.props.formData[element]
            })
        }

        return formArray.map((item, i) => (
            <div key={i} className="form_element">
                {this.renderTemplate(item)}
            </div>
        ));
    }

    showLabel(show, label) {
        return show ? 
            <label>{label}</label>
        : null;
    }

    renderTemplate(data) {
        let formTemplate = '';
        let values = data.settings;
        switch(values.element) {
            case('input'):
                formTemplate = (
                    <div>
                        {this.showLabel(values.label, values.labelText)}
                        <input 
                            {...values.config}
                            value={values.value}
                            onBlur={
                                event => this.changeHandler(event, data.id, true)
                            }
                            onChange={
                                event => this.changeHandler(event, data.id, false)
                            }
                        />
                        {this.showValidation(values)}
                    </div>
                );
                break;
            case('textarea'):
                formTemplate = (
                    <div>
                        {this.showLabel(values.label, values.labelText)}
                        <textarea 
                            {...values.config}
                            value={values.value}
                            onChange={
                                event => this.changeHandler(event, data.id)
                            }
                        />
                        {this.showValidation(values)}
                    </div>
                );
                break;
            case('select'):
                formTemplate = (
                    <div>
                        {this.showLabel(values.label, values.labelText)}
                        <select 
                            name = {values.config.name}
                            value={values.value}
                            onChange={
                                event => this.changeHandler(event, data.id)
                            }
                        >
                            {values.config.options.map((item, i) => (
                                <option value={item.val} key={i}>{item.text}</option>
                            ))}
                        </select>
                    </div>
                );
                break;
            default:
                formTemplate = '';
        }

        return formTemplate;
    }

    changeHandler(event, id, blur) {
        const newState = this.props.formData;
        newState[id].value = event.target.value;

        if(blur) {
           let validData = this.validData(newState[id]);
            newState[id].valid = validData[0];
            newState[id].validationMessage = validData[1]; 
        }
        newState[id].touched = blur;

        this.props.change(newState);
    }

    validData(element) {
        let error = [true, ''];

        if(element.validation.minLength) {
            const valid = element.value.length >= element.validation.minLength;
            const message = `${ !valid ? 
                'Must be greater than ' + element.validation.minLength 
                : '' }`;
            error = !valid ? [valid, message] : error;
        }


        if(element.validation.required) {
            const valid = element.value.trim() !== '';
            const message = `${ !valid ? 'This field is required' : '' }`;
            error = !valid ? [valid, message] : error;
        }

        return error;
    }

    showValidation(data) {
        let errorMessage = null;
        if(data.validation && !data.valid) {
            errorMessage = (
                <div className="label_error">
                    {data.validationMessage}
                </div>
            );
        }
        return errorMessage;
    }

    render() {
        return (
            <div>
                {this.renderFields()}
            </div> 
        );
    }
}

export default FormFields;
