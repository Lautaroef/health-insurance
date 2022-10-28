import * as Yup from "yup";

const primaryDataFormValidator = Yup.object({
  id: Yup.string()
    .length(8, "Introduzca una identificación válida de 8 dígitos máximo")
    .matches(/[0-9]{8}/, {
      message: "Introduzca una identificación válida de 8 dígitos máximo",
    })
    .required("Campo requerido"),
  dob: Yup.date()
    .max(new Date(), "La fecha no puede ser mayor al día de hoy")
    .required("Campo requerido"),
  cellphone: Yup.string()
    .length(9, "Introduzca un número válido de 9 dígitos")
    .matches(/[0-9]{9}/, { message: "Introduzca un número válido de 9 dígitos" })
    .required("Campo requerido"),
  agreeWithDataPolicy: Yup.boolean()
    .required("Campo requerido")
    .oneOf([true], "Debe aceptar estos términos"),
  agreeWithCommunicationPolicy: Yup.boolean()
    .required("Campo requerido")
    .oneOf([true], "Debe aceptar estos términos"),
});

export { primaryDataFormValidator };
