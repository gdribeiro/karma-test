module.exports = {
    findFirstRepeatedWord: function (input) {
    
      let cleanInput = input.toLowerCase().replace(/:|=|;|,|-/g, '');
      cleanInput = cleanInput.replace(/\s+/g, ' ');
     
      let splitted = cleanInput.split(' ');
      console.log(splitted);
      try {
          if (splitted[0] == splitted[1]){
              return splitted[1];
          } else {
              throw new Error('InvalitInput');
          }
      } catch (error) {
          console.log(`${error.name}: ${error.message}`);
          return error;
      }

    }
  };