// Conditional

// Study Case 1

/**
 * Nilai dari Berat
 * 
 * Jika berat di atas 100, maka di sebut "Obesitas"
 * Jika berat di atas 85 sampai 100, maka di sebut "Overweight"
 * Jika berat di atas 70 sampai 85, maka di sebut "Normal"
 * JIka berat d atas 50 sampai 70, maka di sebut "Kurus"
 * Jika berat di bawah 50, maka di sebut "Overskinny"
 */

// PSEUDOCODE
/**
 * STORE weight WITH ANY NUMBER
 * 
 * IF weight GREATER THAN 100 THEN
 *  DISPLAY "Obesitas"
 * ELSE IF weight GREATER THAN 85 AND LESS THAN EQUAL 100 THEN
 *  DISPLAY "Overweight"
 * ELSE IF weight GREATER THAN 70 AND LESS THAN EQUAL 85 THEN
 *  DISPLAY "Normal"
 * ELSE IF weight GREATER THAN 50 AND LESS THAN EQUAL 70 THEN
 *  DISPLAY "Kurus"
 * ELSE IF weight LESS THAN EQUAL 50 THEN
 *  DISPLAY "Overskinny"
 * END IF
 */

// CODING

// var weight = 135;

// if (weight > 100) {
//     console.log("Obesitas")
// } else if (weight > 85 && weight <= 100) {
//     console.log("Overweight")
// } else if (weight > 70 && weight <= 85) {
//     console.log("Normal")
// } else if (weight > 50 && weight <= 70) {
//     console.log("Kurus")
// } else if (weight <= 50) {
//     console.log("Overskinny")
// }


// STudy Case 2

/**
 * Jika access kosong, maka tampilkan "Input access"
 * Access public, jika level di bawah 5 maka tampilkan "Public di bawah 5"
 * Access public, jika level di atas 5 maka tampilkan "Public di atas 5"
 * Access public, jika level sama dengan 5 maka tampilkan "Public five"
 *
 * Access private, jika level di bawah 5 maka tampilkan "Private di bawah 5"
 * Access private, jika level di atas 5 maka tampilkan "Private di atas 5"
 * Access private, jika level sama dengan 5 maka tampilkan "Private five"
 *
 * Access protected, jika level di bawah 5 maka tampilkan "Protected di bawah 5"
 * Access protected, jika level di atas 5 maka tampilkan "Protected di atas 5"
 * Access protected, jika level sama dengan 5 maka tampilkan "Protected five"
 *
 * Jika access salah, tampilkan "Access is not defined"
 *
 * Buat Algoritma, Pseudocode dan Codingan
 */

// PSEUDOCODE

/**
 * STORE access WITH ANY STRING
 * STORE level WITH ANY NUMBER
 * 
 * IF access EQUAL "public" THEN
 *  IF level LESS THAN 5 THEN
 *      DISPLAY "Public di bawah 5"
 *  ELSE IF level GREATER THAN 5 THEN
 *      DISPLAY "Public di atas 5"
 *  ELSE 
 *      DISPLAY "Public five"
 *  END IF
 * ELSE IF access EQUAL "private" THEN
 *  IF level LESS THAN 5 THEN
 *      DISPLAY "Private di bawah 5"
 *  ELSE IF level GREATER THAN 5 THEN
 *      DISPLAY "Private di atas 5"
 *  ELSE 
 *      DISPLAY "Private five"
 *  END IF
 * ELSE IF access EQUAL "protected" THEN
 *  IF level LESS THAN 5 THEN
 *      DISPLAY "Protected di bawah 5"
 *  ELSE IF level GREATER THAN 5 THEN
 *      DISPLAY "Protected di atas 5"
 *  ELSE 
 *      DISPLAY "Protected five"
 *  END IF
 * ELSE IF access EQUAL ""
 *  DISPLAY "Input access"
 * ELSE 
 *  DISPLAY "Access is not defined"
 * END IF
 */

// CODING

var access = "tests";
var level = 9;

switch (access) {
    case 'public':
        if (level < 5) {
            console.log("Public di bawah 5")
        } else if (level > 5) {
            console.log("Public di atas 5")
        } else {
            console.log("Public five")
        }
        break;
    case 'private':
        if (level < 5) {
            console.log("Private di bawah 5")
        } else if (level > 5) {
            console.log("Private di atas 5")
        } else {
            console.log("Private five")
        }
        break;
    case 'protected':
        if (level < 5) {
            console.log("Protected di bawah 5")
        } else if (level > 5) {
            console.log("Protected di atas 5")
        } else {
            console.log("Protected five")
        }
        break;
    default:
        if(access === ""){
            console.log("Input access")
        } else{
            console.log("Access is undefined")
        }
        break;
}