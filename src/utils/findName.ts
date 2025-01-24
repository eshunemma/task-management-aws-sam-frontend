export const findNameFunction = (data: any, email: string) => {
  return data.find((person) => person.email === email)?.name || "Null";
};
