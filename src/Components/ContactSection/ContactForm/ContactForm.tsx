import { Input } from "@/Components/ContactSection/ContactForm/Input/Input";
import styles from "./ContactForm.module.scss";
import { FormEvent, useState } from "react";
import { TextArea } from "@/Components/ContactSection/ContactForm/TextArea/TextArea";
import { SendButton } from "@/Components/ContactSection/ContactForm/SendButton/SendButton";

type Values = Record<"name" | "email" | "message", string>;

const validate = (values: Values): (keyof Values)[] => {
  const fieldsWithErrors = Object.keys(values).filter(
    (key) => !values[key as keyof Values].length
  );

  return fieldsWithErrors as (keyof Values)[];
};

export const ContactForm = () => {
  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<(keyof Values)[]>([]);

  const changeValues = (name: keyof Values, value: string) => {
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fieldsWithErrors = validate(values);
    setErrors(fieldsWithErrors);

    if (fieldsWithErrors.length) {
      return;
    }

    console.log(values);

    setValues({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Input
        error={errors.includes("name")}
        placeholder="Enter your name..."
        value={values["name"]}
        onChange={(e) => {
          changeValues("name", e.target.value);
        }}
      />
      <Input
        error={errors.includes("email")}
        placeholder="Enter your email..."
        value={values["email"]}
        onChange={(e) => {
          changeValues("email", e.target.value);
        }}
      />
      <TextArea
        error={errors.includes("message")}
        placeholder="Message"
        value={values["message"]}
        onChange={(e) => {
          changeValues("message", e.target.value);
        }}
      />
      <SendButton />
    </form>
  );
};
