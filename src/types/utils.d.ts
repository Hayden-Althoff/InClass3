type DatabaseConstraintError = {
  type: 'unique' | 'check' | 'not null' | 'foreign key' | 'unknown';
  columnName?: string;
  message?: string;
};

type AuthRequest = {
  email: string;
  password: string;
};

type NewEmailBody = {
  email: string;
  userId: string;
}

type retrieveId = {
  userId: string;
}
