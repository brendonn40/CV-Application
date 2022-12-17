const formInfo = [
  {
    id: "name",
    type: "text",
    isRequired: true,
    min: 6,
    requiredMsg: "Nome é um campo obrigatório.",
    minMsg: "Nome é curto demais.",
  },
  {
    id: "email",
    type: "email",
    isRequired: true,
    min: null,
    requiredMsg: "Email necessário.",
    minMsg: null,
  },
  {
    id: "phone",
    type: "phone",
    isRequired: true,
    min: 8,
    requiredMsg: "Forneça um numero de telefone",
    minMsg: "Numero de telefone deve conter pelo menos 8 digitos",
  },
];

export default formInfo;
