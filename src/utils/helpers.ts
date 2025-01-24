export const getNameInitials = (name: string) => {
  if (!name) return "";

  // Split the name by spaces, filter out empty strings, and map to initials
  const initials = name
    .split(" ")
    .filter((part) => part.trim() !== "") // Remove any empty parts
    .map((part) => part[0].toUpperCase()) // Take the first character and capitalize
    .join(""); // Join the initials together

  return initials;
};
