const generatePassword = (length, complexity) => {
    let password = '';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numericChars = '0123456789';
    const specialChars = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    let charSet = '';
  
    if (complexity === 'weak') {
      charSet = lowercaseChars;
    } else if (complexity === 'moderate') {
      charSet = lowercaseChars + uppercaseChars + numericChars;
    } else if (complexity === 'strong') {
      charSet = lowercaseChars + uppercaseChars + numericChars + specialChars;
    }
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      password += charSet[randomIndex];
    }
  
    return password;
  };
  