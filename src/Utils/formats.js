export const formatDate = (date) => {
 const regex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;

 if (!regex.test(date)) {
  return 'Formato de data inválido';
 }

 const dataObj = new Date(date);

 // Formata a data no formato brasileiro
 const dia = dataObj.getDate().toString().padStart(2, '0');
 const mes = (dataObj.getMonth() + 1).toString().padStart(2, '0');
 const ano = dataObj.getFullYear();

 return `${dia}/${mes}/${ano}`;
};

export const formatCNPJ = (cnpj) => {
 cnpj = cnpj?.replace(/\D/g, '');

 if (cnpj.length !== 14) {
  return 'CPF inválido';
 }

 return `${cnpj?.slice(0, 2)}.${cnpj?.slice(2, 5)}.${cnpj?.slice(5, 8)}/${cnpj?.slice(8, 12)}-${cnpj?.slice(12)}`;
};

export const formatCPF = (cpf) => {
 cpf = cpf?.replace(/\D/g, '');

 if (cpf.length !== 11) {
  return 'CPF inválido';
 }

 return `${cpf?.slice(0, 3)}.${cpf?.slice(3, 6)}.${cpf?.slice(6, 9)}-${cpf?.slice(9)}`;
};

export const formatRG = (rgNumber) => {
 const cleanRG = rgNumber.replace(/[^\d]/g, '');

 if (cleanRG.length !== 9) {
  return rgNumber;
 }

 const formattedRG = `${cleanRG?.substring(0, 2)}.${cleanRG?.substring(2, 5)}.${cleanRG?.substring(5, 8)}-${cleanRG?.substring(8)}`;

 return formattedRG;
};

export const formatPhoneNumber = (phoneNumber) => {
 phoneNumber = phoneNumber?.replace(/\D/g, '');

 if (phoneNumber?.length !== 11) {
  return 'Número de telefone inválido';
 }

 return `(${phoneNumber?.slice(0, 2)}) ${phoneNumber?.slice(2, 7)}-${phoneNumber?.slice(7)}`;
};

export const formatMoney = (value) => {
 const valueWithTwoDecimalPlaces = parseFloat(value)?.toFixed(2);

 const formattedValue = valueWithTwoDecimalPlaces?.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL',
 });

 return formattedValue;
};

export const formatCEP = (cep) => {
 cep = cep?.replace(/\D/g, '');

 if (cep?.length !== 8) {
  return 'CEP inválido';
 }

 return `${cep?.slice(0, 5)}-${cep?.slice(5)}`;
};
