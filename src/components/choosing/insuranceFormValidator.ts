import * as Yup from "yup";

const insuranceFormValidator = Yup.object({
  id: Yup.string()
    .length(8, "Introduzca una identificación válida")
    .matches(/[0-9]{8}/, { message: "Introduzca una identificación válida" })
    .required("Campo requerido"),
  name: Yup.string().required("Campo requerido"),
  fatherLastName: Yup.string().trim().required("Campo requerido"),
  motherLastName: Yup.string().trim().required("Campo requerido"),
  dob: Yup.date()
    .max(new Date(), "La fecha no puede ser mayor al día de hoy")
    .required("Campo requerido"),
  gender: Yup.string().required("Campo requerido"),
  insured: Yup.string().required("Campo requerido"),
  plan: Yup.string().required("Campo requerido"),
});

const insuranceFormValidatorNewUser = Yup.object({
  name: Yup.string().required("Campo requerido"),
  insured: Yup.string().required("Campo requerido"),
  plan: Yup.string().required("Campo requerido"),
});

export { insuranceFormValidator, insuranceFormValidatorNewUser };
