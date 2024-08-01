// utils/colors.ts

import { getCouples } from "./CouplesData";

export type Color = string;

export const backgroundColors: { [key: string]: Color } = {
    primary: '#85aaba',
    secondary: '#ffed4a',
    success: '#38c172',
    danger: '#e3342f',
    warning: '#f6993f',
    info: '#6cb2eb',
    light: '#f8f9fa',
    dark: '#343a40',
    white: '#ffffff',
    black: '#000000',
};

export const foregroundColors: { [key: string]: Color } = {
    primary: '#ffffff',
    secondary: '#000000',
    success: '#ffffff',
    danger: '#ffffff',
    warning: '#000000',
    info: '#ffffff',
    light: '#000000',
    dark: '#ffffff',
    white: '#000000',
    black: '#ffffff',
};

/**
 * Utility function to get background color by key.
 * @param key - The key of the background color.
 * @returns The corresponding background color.
 */
export const getBgColor = (): Color => {
    const Couples = getCouples()
    return Couples.weddingColor.BgColor || backgroundColors.white;
};

/**
 * Utility function to get foreground color by key.
 * @param key - The key of the foreground color.
 * @returns The corresponding foreground color.
 */
export const getTextColor = (): Color => {
    const Couples = getCouples()
    return Couples.weddingColor.TextColor || foregroundColors.black;
};




export const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };
  


  export const formatDate = (dateString: string | number | Date) =>{
    // Create a new Date object from the date string
    const date = new Date(dateString);
    
    // Define an array with month names
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    
    // Get the day, month, and year from the Date object
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    
    // Return the formatted date string
    return `${day} ${month} ${year}`;
  }