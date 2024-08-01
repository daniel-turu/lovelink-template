// utils/colors.ts


export type Color = string;

// primary: '#85aaba',
// secondary: '#ffed4a',
// success: '#38c172',
// danger: '#e3342f',
// warning: '#f6993f',
// info: '#6cb2eb',
// light: '#f8f9fa',
// dark: '#343a40',
// white: '#ffffff',
// black: '#000000',






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