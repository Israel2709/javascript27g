// let today = new Date();
// let timestamp = today.getTime();

// console.log(today);
// console.log(typeof today);

// /*
// jorge nacio el 20/09/1985

// sergio nacio el 17/10/1993

// cuál es la diferencia exacta en días, meses y años de sus edades
// */
// /*
// let jorgeTimestamp = new Date("1985-09-20").getTime();
// console.log(jorgeTimestamp);

// let sergioTimestamp = new Date("1993-10-17").getTime();
// console.log(sergioTimestamp);

// let difference = Math.abs(jorgeTimestamp - sergioTimestamp);
// console.log(difference);

// let differenceInSeconds = difference / 1000;
// let differenceInMinutes = differenceInSeconds / 60;
// let diffInHours = differenceInMinutes / 60;
// let diffInDays = diffInHours / 24;
// let diffInMonths = diffInDays / 30;
// let diffInYears = diffInMonths / 12;

// console.log(diffInYears);
// console.log(0.19 * 12);
// console.log(30.5 * 0.28);
// */

// /*
//     quiero saber qué día de la semana era cuando nació cada uno de mis koders
//     */
// const getWeekDay = (birthday) => {
//   let birth = new Date(birthday);
//   let day = birth.getDay();
//   console.log(day);
//   let weekDay = "";
//   switch (day) {
//     case 0:
//       weekDay = "Domingo";
//       break;
//     case 1:
//       weekDay = "Lunes";
//       break;
//     case 2:
//       weekDay = "Martes";
//       break;
//     case 3:
//       weekDay = "Miércoles";
//       break;
//     case 4:
//       weekDay = "Jueves";
//       break;
//     case 5:
//       weekDay = "Viernes";
//       break;
//     case 6:
//       weekDay = "Sábado";
//       break;
//     default:
//       "El día no existe";
//   }
//   return weekDay;
// };

// let test1 = getWeekDay("2001-08-04");
// let test2 = getWeekDay("1989-09-27");
// console.log(test1);
// console.log(test2);

// let name = "Israel";

// let mentor = {
//   name: "Israel",
// };

// let koder = {
//     name:"Charles",
//     average:9.8
// }

// switch (koder.average) {
//   case 10:
//     console.log("excelente")
//     break;
//   default:
//     console.log("es koder");
//     break;
// }

const d = new Date("September 27, 1989 01:15:00");
let day = d.getDay();

console.log(day);

const functA = () => {
  const functB = () => {
    console.log("funcion b");
  };
  console.log("funcion a");
};

console.log(functB());

/*Calculadora*/

const mainCalculator = () => {
  const add2Numbers = (a, b) => {};
};

/*Procesador de arrays*/

const filterArray = () => {
  add2Numbers();
};

/*Procesador de strings*/
