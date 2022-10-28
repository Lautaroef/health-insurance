import { useRouter } from "next/router";

import { Formik, Form, FormikHelpers } from "formik";
import { primaryDataFormValidator } from "./primaryDataFormValidator";
import {
  DateInput,
  TextInput,
  SelectWithTextInput,
  CheckboxInput,
} from "components/common/FormElements";
import { Person } from "classes/Person";

const PrimaryForm = () => {
  const router = useRouter();

  return (
    <Formik
      initialValues={new Person()}
      validationSchema={primaryDataFormValidator}
      onSubmit={(values: Person, { setSubmitting }: FormikHelpers<Person>) => {
        router.push({
          pathname: "/choosing",
          query: { person: JSON.stringify(values) },
        });
      }}
    >
      {(formik) => {
        return (
          <Form className="primary-data-form">
            <SelectWithTextInput
              selectName="identifierType"
              options={[{ value: "dni", text: "DNI" }]}
              textName="id"
              textLabel="Nro. de documento"
              textPlaceholder="87654321"
              showError={!!formik.errors.id}
              errorMessage={formik.errors.id || ""}
            />

            <DateInput
              name="dob"
              label="Fecha de nacimiento"
              placeholder="Fecha de nacimiento"
              showError={!!formik.errors.dob}
              errorMessage={formik.errors.dob || ""}
            />

            <TextInput
              name="cellphone"
              label="Celular"
              placeholder="123456789"
              showError={!!formik.errors.cellphone}
              errorMessage={formik.errors.cellphone || ""}
            />

            <CheckboxInput
              name="agreeWithDataPolicy"
              showError={!!formik.errors.agreeWithDataPolicy}
              errorMessage={formik.errors.agreeWithDataPolicy || ""}
            >
              <span>
                Acepto la{" "}
                <span className="underlined">
                  {" "}
                  Política de Protección de Datos Personales y los Términos y Condiciones.
                </span>
              </span>
            </CheckboxInput>

            <CheckboxInput
              name="agreeWithCommunicationPolicy"
              showError={!!formik.errors.agreeWithCommunicationPolicy}
              errorMessage={formik.errors.agreeWithCommunicationPolicy || ""}
            >
              <span>
                Acepto la{" "}
                <span className="underlined">
                  Política de Envío de Comunicaciones Comerciales.
                </span>
              </span>
            </CheckboxInput>
            <button
              className={`${
                formik.isValid && formik.values.id.trim() !== "" ? "btn" : "btn-disabled"
              } mt-40`}
              type="submit"
              disabled={!formik.isValid || formik.values.id.trim() === ""}
            >
              COMENCEMOS
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default function PrimaryDataForm() {
  return (
    <>
      <h2>
        <span className="light">Obtén tu </span>
        <span className="light color-primary">seguro ahora</span>
      </h2>
      <p>Ingresa los datos para comenzar</p>
      <PrimaryForm />
    </>
  );
}
