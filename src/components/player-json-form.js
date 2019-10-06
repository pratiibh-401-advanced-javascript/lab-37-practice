import React from 'react';
import {useState, useEffect} from 'react';


import Form from 'react-jsonschema-form';
import schema from '../schema.json';

// import * as actions from '../store/players.store.js';

const uiSchema = {
  _id: { 'ui:widget': 'hidden' },
  __v: { 'ui:widget': 'hidden' },
};

let PlayerFormJSON = props => {

  const data = props.initialValues || {};

  let [form,setForm] = useState(data);

//   const handleChange = (e) => {
//     let {name,value} = e.target;
//     setForm({...form, [name]:value});
//   };

   const handleSubmit = (form) => {
    if ( parseInt(props.id) >= 0 ) { 
      props.handlePut({id:props.id, record:form.formData});  
    }
    else {
      props.handlePost(form.formData);
    }
  }

  useEffect( () => {
    setForm(data);
  }, []);


  return (

        <Form
            schema={schema}
            uiSchema={uiSchema}
            formData={props.players[props.id]}
            onSubmit={handleSubmit}
          />
  );
};

export default PlayerFormJSON;
