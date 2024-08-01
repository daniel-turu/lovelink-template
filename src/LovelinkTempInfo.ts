export type info = {
    tempName: string;
    bgColor?: string;
    textColor?: string;
    description?: string;
};
export type TempInfo = info;

export const getContrastColor = (bgColor: string): string => {
    // Remove the hash at the start if it's there
    const color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;

    // Convert to RGB values
    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);

    // Calculate the brightness of the color
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    // If brightness is greater than 128, use black text, otherwise use white text
    return brightness > 128 ? '#000000' : '#FFFFFF';
};

// Note TempInfo and tempName must be thesame
export const lovelinkTemp: { [key: string]: TempInfo } = {
    template1: { tempName: 'template1', bgColor: '#85aaba', textColor: getContrastColor('#85aaba'), description: "This is the first template design" },
    couplesdream: { tempName: 'couplesdream', bgColor: '#38c172', textColor: getContrastColor('#38c172'), description: '' },
};
    