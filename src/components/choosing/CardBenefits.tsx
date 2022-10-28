import type { Plan } from "constants/insurance.constants";
import Image from "next/image";
import ElementPlan from "./ElementPlan";

const CardBenefits = ({
  name,
  text,
  maxCovered,
  price,
  urlShield,
  isLocalCountry,
  isThirtyClinics,
  hasHomeDoctor,
  hasPreventiveCheck,
  hasNationalRefund,
  hasInternationalRefund,
}: Plan) => {
  return (
    <div className="card-plan">
      <div className="card-plan__header">Cuentas con estos beneficios</div>
      <div className="card-plan__body">
        <div className="card-plan__max">
          <div className="card-plan__max__detail">
            <span className="font-12 mb-15">Cobertura máxima</span>
            <strong className="mb-15">{maxCovered}</strong>
            <div>
              <span className="tag">PLAN {text}</span>
            </div>
          </div>
          <Image width={68} src={urlShield} alt="benefit" />
        </div>
        <div className="card-plan__offer">
          <ul>
            <ElementPlan active={isLocalCountry}>
              <>
                <span>Argentina </span>
                <span>(zona de cobertura)</span>
              </>
            </ElementPlan>
            <ElementPlan active={isThirtyClinics}>
              <>
                <span>+30 clínicas </span>
                <span>(en red afiliada)</span>
              </>
            </ElementPlan>
            <ElementPlan active={hasHomeDoctor}>
              <>Médico a domicilio</>
            </ElementPlan>
            <ElementPlan active={hasPreventiveCheck}>
              <>Chequeos preventivos</>
            </ElementPlan>
            <ElementPlan active={hasNationalRefund}>
              <>Reembolso nacional</>
            </ElementPlan>
            <ElementPlan active={hasInternationalRefund}>
              <>Reembolso internacional</>
            </ElementPlan>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardBenefits;
