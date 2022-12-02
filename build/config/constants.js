export const codeRef = `${String(new Date().getFullYear().toString().substring(-2, 2)).padStart(2, '0')}${String(new Date().getMonth() + 1).padStart(2, '0')}${String(new Date().getDate()).padStart(2, '0')}`;
export const PROJECT_CLIENT_TYPES = ['COMPANY', 'PERSON'];
export const PROJECT_STATUS = ['DRAFT', 'PENDING', 'VALIDATED', 'ANSWERED', 'CLOSED', 'ARCHIVED'];
export const LEGAL_STATUS = ['EARL', 'EI', 'EIRL', 'EURL', 'GAEC', 'GEIE', 'GIE', 'SARL', 'SA', 'SAS', 'SASU', 'SC', 'SCA', 'SCI', 'SCIC', 'SCM', 'SCOP', 'SCP', 'SCS', 'SEL', 'SELAFA', 'SELARL', 'SELAS', 'SELCA', 'SEM', 'SEML', 'SEP', 'SICA', 'SNC', 'Other'];
export const TRANSACTION_STATUS = ['INVALID', 'CANCELED', 'REFUSED', 'PENDING', 'DELETED', 'SUCCESS'];
export const CONSULTATION_STATUS = ['INVALID', 'CANCELED', 'REFUSED', 'PENDING', 'DELETED', 'ACCEPTED'];
export const ID_VAIDATION_MSG = 'Should be valid mongo id';
export const NOTIFICATIONS_STATUS = ['SENT', 'SEEN', 'IGNORED', 'ARCHIVED'];