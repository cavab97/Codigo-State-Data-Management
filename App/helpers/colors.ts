// colorSeq = {1: 'blue', 2: 'red', 3: 'green', 4: 'purple', 5: 'pink'};

const customIcons = {};

export const MainColour = (boolean: boolean) => {
  switch (boolean) {
    case true:
      return {primaryColour: 'white', secondaryColour: '#FF614E'};
    case false:
      return {primaryColour: '#BF4F74', secondaryColour: 'white'};

    default:
      return {primaryColour: '#BF4F74', secondaryColour: 'white'};
  }
};

export const SelectMainColour = (boolean: boolean) => {
  switch (boolean) {
    case true:
      return {
        textColour: 'white',
        backgroundColour: 'black',
        borderColor: 'transparent',
      };
    case false:
      return {
        textColour: 'black',
        backgroundColour: 'transparent',
        borderColor: 'black',
      };

    default:
      return {
        textColour: 'white',
        backgroundColour: 'black',
        borderColor: 'transparent',
      };
  }
};
