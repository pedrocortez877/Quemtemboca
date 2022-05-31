import * as yup from 'yup';

yup.setLocale({
  mixed: {
    required: '${path} é um campo obrigatório',
    notType: '${path} deve ser do tipo ${type}'
  },
  string: {
    min: '${path} precisa ser igual ou maior que ${min}'
  },
});

export default yup;
