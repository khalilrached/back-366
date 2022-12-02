import DateExtension from '@hapi/joi-date';
import JoiImport from 'joi';

const Joi = JoiImport.extend(DateExtension);

export default {
  // POST /signup
  signup: {
    body: Joi.object({
      file
    }),
  },
};
