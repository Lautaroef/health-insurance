import type { Person } from "classes/Person";

import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { ChevronRight, ChevronDown } from "heroicons-react";
import { PLANS } from "../../constants/insurance.constants";
import CardBenefits from "./CardBenefits";

import {
  insuranceFormValidator,
  insuranceFormValidatorNewUser,
} from "./insuranceFormValidator";

import {
  DateInput,
  RadioButtonGroupInput,
  SelectWithTextInput,
  TextInput,
  SelectWithDateInput,
} from "components/common/FormElements";

import urlIconBackRounded from "images/icon-back-rounded.svg";
import urlMan from "images/man.svg";
import urlIconCorrect from "images/icon-correct.svg";

type InsuranceFormValues = {
  person: Person;
};

function InsuranceDataForm({ person }: InsuranceFormValues) {
  const [step, setStep] = useState<number>(1);
  const [relatives, setRelatives] = useState<{ relationship: string; relativeDob: string }[]>(
    []
  );
  const router = useRouter();

  const goNextStep = () => {
    setStep(2);
  };

  const goPreviousStep = () => {
    setStep(1);
  };

  const goThanksPage = () => {
    router.push("/thanks");
  };

  const goHomePage = () => {
    router.push("/");
  };

  const deleteRelative = (index: number) => {
    let auxRelatives = [...relatives];
    auxRelatives.splice(index, 1);
    setRelatives(auxRelatives);
  };

  return (
    <Formik
      initialValues={person}
      validationSchema={person.name ? insuranceFormValidator : insuranceFormValidatorNewUser}
      onSubmit={(values: Person, { setSubmitting }: FormikHelpers<Person>) => {
        // router.push("/choosing");
        router.push("/thanks");
      }}
    >
      {(formik) => {
        const addRelative = (relationship: string, relativeDob: string) => {
          if (relationship && relativeDob) {
            setRelatives([
              ...relatives,
              {
                relationship: relationship,
                relativeDob: relativeDob,
              },
            ]);
            formik.values.relationships = "Cónyuge";
            formik.values.relativeDob = "";
          }
        };

        return (
          <Form className="insurance-form">
            {step === 1 ? (
              <>
                <div className="flex align-center mb-20 font-12">
                  <Image
                    alt="Back"
                    src={urlIconBackRounded}
                    className="cursor-pointer ml-30-neg"
                    onClick={goHomePage}
                  />
                  <span className="color-primary cursor-pointer ml-8" onClick={goHomePage}>
                    PASO 1&nbsp;
                  </span>
                  <span className="color-gray"> DE 2</span>
                </div>
                <h2 className="light mb-10">
                  <span>Hola, </span>
                  <span className="light color-primary">{person.name || "¡empecemos!"}</span>
                </h2>
                <p className="light mb-35">
                  {person.name
                    ? "Valida que los datos sean correctos"
                    : "Cuéntanos un poco sobre ti"}
                </p>
                <h3 className="light mb-20">
                  {person.name ? "Datos personales del titular" : "Ingresa tu nombre"}
                </h3>

                {person.name ? (
                  <SelectWithTextInput
                    selectName="identifierType"
                    options={[{ value: "dni", text: "DNI" }]}
                    textName="id"
                    textLabel="Nro. de documento"
                    textPlaceholder="87654321"
                    showError={!formik.isValid}
                    errorMessage={formik.errors.id || ""}
                  />
                ) : null}

                <TextInput
                  name="name"
                  label="Nombre"
                  placeholder="Nombre"
                  showError={!formik.isValid}
                  errorMessage={formik.errors.name || ""}
                />

                {person.name ? (
                  <>
                    <TextInput
                      name="fatherLastName"
                      label="Apellido paterno"
                      placeholder="Apellido paterno"
                      showError={!formik.isValid}
                      errorMessage={formik.errors.fatherLastName || ""}
                    />

                    <TextInput
                      name="motherLastName"
                      label="Apellido Materno"
                      placeholder="Apellido Materno"
                      showError={!formik.isValid}
                      errorMessage={formik.errors.motherLastName || ""}
                    />

                    <DateInput
                      name="dob"
                      label="Fecha de nacimiento"
                      placeholder="Fecha de nacimiento"
                      showError={!formik.isValid}
                      errorMessage={formik.errors.dob || ""}
                    />

                    <RadioButtonGroupInput
                      name="gender"
                      title="Género"
                      options={[
                        { value: "M", text: "Masculino" },
                        { value: "F", text: "Femenino" },
                      ]}
                      showError={!formik.isValid}
                      errorMessage={formik.errors.gender || ""}
                    />
                  </>
                ) : null}

                <RadioButtonGroupInput
                  name="insured"
                  title="¿A quién vamos a asegurar?"
                  options={[
                    { value: "yo", text: "Solo a mí" },
                    { value: "familia", text: "A mí y a mi familia" },
                  ]}
                  showError={!formik.isValid}
                  errorMessage={formik.errors.insured || ""}
                />

                {formik.values.insured === "familia" ? (
                  <>
                    <div className="flex align-center">
                      <SelectWithDateInput
                        selectName="relationships"
                        options={[
                          { value: "Cónyuge", text: "Cónyuge" },
                          { value: "Hijo", text: "Hijo" },
                          { value: "Hija", text: "Hija" },
                        ]}
                        dateName="relativeDob"
                        dateLabel="Fecha de nacimiento"
                        datePlaceholder="Fecha de nacimiento"
                        showError={false}
                        errorMessage={""}
                        className="grow-1"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          addRelative(formik.values.relationships, formik.values.relativeDob);
                        }}
                        className={"btn-white mt-16 color-gray-medium"}
                      >
                        Agregar
                      </button>
                    </div>

                    <div className="flex align-center">
                      <ul className="relatives grow-1">
                        {relatives.map((relative, index) => (
                          <li key={index} className="flex align-center">
                            <div className="flex align-center grow-1 pl-15">
                              <span className="mw-100">{relative.relationship}</span>
                              <span>{relative.relativeDob}</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                deleteRelative(index);
                              }}
                              className={"btn-white color-gray-medium"}
                            >
                              Eliminar
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : null}

                <div className="flex justify-end mt-20">
                  <button
                    type="button"
                    onClick={goNextStep}
                    className={
                      formik.isValid && !!formik.values.insured ? "btn" : "btn-disabled"
                    }
                    disabled={!(formik.isValid && !!formik.values.insured)}
                  >
                    CONTINUAR
                    <ChevronRight />
                  </button>
                </div>
              </>
            ) : null}
            {step === 2 ? (
              <>
                <div className="flex align-center mb-20 font-12">
                  <Image
                    alt="Back"
                    src={urlIconBackRounded}
                    className="cursor-pointer ml-30-neg"
                    onClick={goPreviousStep}
                  />
                  <span className="color-primary cursor-pointer ml-8" onClick={goPreviousStep}>
                    PASO 2&nbsp;
                  </span>
                  <span className="color-gray"> DE 2</span>
                </div>

                <h2 className="light mb-10">
                  <span>Elige </span>
                  <span className="light color-primary">tu protección</span>
                </h2>
                <p className="light mb-35">Selecciona tu plan de salud ideal</p>

                <div role="group" aria-labelledby="plan" className="plans">
                  {PLANS.map((plan) => {
                    return (
                      <label
                        key={plan.name}
                        className={
                          plan.name === formik.values.plan
                            ? "checkbox-plan--active"
                            : "checkbox-plan"
                        }
                      >
                        <Field type="radio" name="plan" value={plan.name} />
                        <div className="checkbox-plan__description">
                          <div>
                            <span className="font-11">{plan.text}</span>
                          </div>
                          <div>
                            <span className="font-10">s/ </span>
                            <span>{plan.price}</span>
                          </div>
                          <div>
                            <span className="font-11">mensual</span>
                          </div>
                        </div>
                        {plan.name === formik.values.plan ? (
                          <Image alt="check" className="check-icon" src={urlIconCorrect} />
                        ) : null}
                      </label>
                    );
                  })}
                </div>
                <div>
                  {PLANS.map((plan) => {
                    return plan.name === formik.values.plan ? (
                      <CardBenefits
                        key={plan.name}
                        name=""
                        text={plan.text}
                        maxCovered={plan.maxCovered}
                        urlShield={plan.urlShield}
                        price={0}
                        isLocalCountry={plan.isLocalCountry}
                        isThirtyClinics={plan.isThirtyClinics}
                        hasHomeDoctor={plan.hasHomeDoctor}
                        hasPreventiveCheck={plan.hasPreventiveCheck}
                        hasNationalRefund={plan.hasNationalRefund}
                        hasInternationalRefund={plan.hasInternationalRefund}
                      />
                    ) : null;
                  })}
                </div>
                <div className="border-bottom-gray-light py-20 flex justify-between align-center">
                  <div>
                    <p>Revisa nuestros</p>
                    <strong className="color-primary">servicios y exclusiones</strong>
                  </div>
                  <Image alt="check" className="check-icon" src={urlMan} />
                </div>
                <div className="flex justify-between py-20 border-bottom-gray-light">
                  <span>Servicios brindados</span>
                  <ChevronDown className="color-primary" />
                </div>
                <div className="flex justify-between mb-20 py-20 border-bottom-gray-light">
                  <span>Servicios brindados</span>
                  <ChevronDown className="color-primary" />
                </div>
                <div className="flex justify-end choosing-submit-section">
                  <button type="button" className="btn-white font-12 border-bottom-gray-light">
                    ENVIAR COTIZACIÓN POR CORREO
                  </button>
                  <button type="submit" className="btn font-12" onClick={goThanksPage}>
                    COMPRAR PLAN
                  </button>
                </div>
              </>
            ) : null}
          </Form>
        );
      }}
    </Formik>
  );
}

export default InsuranceDataForm;
