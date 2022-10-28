export class Person {
  id: string;
  idType: string;
  name: string;
  fatherLastName: string;
  motherLastName: string;
  dob: string;
  gender: string;
  insured: string;
  plan: string;
  cellphone: string;
  agreeWithDataPolicy: boolean;
  agreeWithCommunicationPolicy: boolean;
  relatives: { relationship: string; birthDte: string }[];
  relationships: string;
  relativeDob: string;

  constructor() {
    this.id = "";
    this.idType = "";
    this.name = "";
    this.fatherLastName = "";
    this.motherLastName = "";
    this.dob = "";
    this.gender = "";
    this.insured = "";
    this.plan = "basic";
    this.cellphone = "";
    this.agreeWithDataPolicy = false;
    this.agreeWithCommunicationPolicy = false;
    this.relatives = [];
    this.relationships = "";
    this.relativeDob = "";
  }

  getData() {
    return {
      id: this.id,
      idType: this.idType,
      name: this.name,
      fatherLastName: this.fatherLastName,
      motherLastName: this.motherLastName,
      dob: this.dob,
      gender: this.gender,
      insured: this.insured,
      plan: this.plan,
      relatives: this.relatives,
    };
  }
}
