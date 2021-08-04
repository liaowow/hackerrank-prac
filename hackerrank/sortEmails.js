/**
 * Print an alphabetically-ordered list of first names for every user with a gmail account. 
 * Each name must be printed on a new line.
 */

function main() {
  const N = parseInt(readLine().trim(), 10);
  let firstNames = []
  
  for (let NItr = 0; NItr < N; NItr++) {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');
    const firstName = firstMultipleInput[0];
    const emailID = firstMultipleInput[1];

    if (emailID.endsWith('@gmail.com')) firstNames.push(firstName);
  }
  firstNames.sort().forEach(name => console.log(name));
}

/* sample input */
// 6
// riya riya@gmail.com
// julia julia@julia.me
// julia sjulia@gmail.com
// julia julia@gmail.com
// samantha samantha@gmail.com
// tanya tanya@gmail.com

/* sample output */
// julia
// julia
// riya
// samantha
// tanya