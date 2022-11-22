const sentence = 'hello there from Lighthouse Labs';

const typeString = str => {
  let timeout = 0;

  for (const char of str + '\n') {
    setTimeout(() => {
      process.stdout.write(char);

    }, timeout);

    timeout += 50;
  }
};

typeString(sentence);