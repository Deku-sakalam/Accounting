import { Birthstone } from "next/font/google";

export type Data = {
  name: string;
  age: number;
  course: "Information Technology" | "Computer Engineering";
}[];

// const data: Data = [
//   {
//     name: "Vincent",
//     age: 5,
//     course: "Computer Engineering",
//   },
//   {
//     name: "Tirso",
//     age: 24,
//     course: "Computer Engineering",
//   },
//   {
//     name: "Jonathan",
//     age: 48,
//     course: "Information Technology",
//   },
// ];

// type Person = { name: string; age: number; course: string; birthday: Date };

// type Persons = Array<Person>;

// const sum = (a: Person) => {
//  return result;

// };

const getAge = (person: { name: string; course: string; birthday: Date }) => {
  // BIRTH YEAR
  const birthYear = person.birthday.getFullYear();
  // BIRTH MONTH
  const birthMonth = person.birthday.getMonth();
  // BIRTH DAY
  const birthDay = person.birthday.getDate();

  const currentYear = new Date().getFullYear();
  // TODAY YEAR
  const currentMonth = new Date().getMonth();
  // TODAY MONTH
  const currentDay = new Date().getDate();
  // TODAY DAY

  // TODAY YEAR  - BIRTH YEAR = TEMPORARY AGE
  const temporaryAge = currentYear - birthYear;

  // kailangan ba mag bawas ng age?

  if (currentMonth > birthMonth) {
    return temporaryAge
  }

  console.log(currentMonth, birthMonth, currentDay, birthDay)
  if (currentMonth == birthMonth && currentDay >= birthDay) {
    return temporaryAge
  }

  return temporaryAge - 1

  // KUNG NEGATIVE ANG SAGOT - BAWASAN NG 1 ANG TEMPORARY AGE - IRETURN NA ANG VALUE
  // KUNG POSITIVE NAMAN - WALANG IBABAWAS

  // TODAY DAY - BIRTH DAY = ??
  // KUNG NEGATIVE ANG SAGOT - BAWASAN NG 1 ANG TEMPORARY AGE - IRETURN NA ANG VALUE
  // KUNG POSITIVE NAMAN - WALANG IBABAWAS

  // RETURN NA ANG VALUE
};
const test = () => {
  return getAge({
    name: "vincent",
    course: "engineering",
    birthday: new Date("2001-06-13"),
  }); // returns 28 as of June 2025
};

export default test;
