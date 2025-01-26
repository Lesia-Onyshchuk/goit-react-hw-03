import { Field, Formik, Form, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const initialValues = { name: "", number: "" };

export default function ContactForm({ onAdd }) {
  const ContactShema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(
        /^\d{3}-\d{2}-\d{2}$/,
        "Phone number must be in the format 000-00-00"
      )
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    console.log(values);
    onAdd({ id: nanoid(), name: values.name, number: values.number });
    actions.resetForm();
  };

  const nameId = useId();
  const numberId = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactShema}
    >
      <Form>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" name="name" id={nameId}></Field>
        <ErrorMessage name="name" component="div" />
        <label htmlFor={numberId}>Number</label>
        <Field type="text" name="number" id={numberId}></Field>
        <ErrorMessage name="number" component="div" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
