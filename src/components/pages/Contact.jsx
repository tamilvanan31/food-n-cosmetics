import { useForm, set } from "react-cool-form";
import * as yup from "yup";

const validateWithYup = (schema) => async (values) => {
    let errors = {};

    try {
        await schema.validate(values, { abortEarly: false });
    } catch (yupError) {
        yupError.inner.forEach(({ path, message }) => set(errors, path, message));
    }

    return errors;
};

const yupSchema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required().min(6)
});

function Contact() {
    const { form } = useForm({
        defaultValues: { username: "", email: "", message: "" },
        validate: validateWithYup(yupSchema),
        onSubmit: (values) => alert(JSON.stringify(values, undefined, 2)),
        onError: (errors) => console.log("onError: ", errors)
    });

    return (
        <form ref={form} noValidate>
            <input name="username" placeholder="Username" />
            <input name="email" type="email" placeholder="Email" />
            <input name="message" type="text" placeholder="Message" />
            <input type="submit" />
        </form>
    );
}

export default Contact;