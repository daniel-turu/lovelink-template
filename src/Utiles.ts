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





const backendDomain = process.env.REACT_APP_BACKEND_DOMAIN


export const getCouplesByReference = async (referenceId: string) => {
  const response = await fetch(`${backendDomain}/couples-template-info/${referenceId}/`);
  
  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const data = await response.json(); // Parse the response as JSON
  console.log(data,"aaaaaaaaaaaaaaaaaaSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS");

  return data; // Return the parsed data
};



interface WeddingDateFormat {
  dayOfWeek: string;
  day: number;
  month: string;
  time: string;
}
// Function to format the wedding date
export const formatWeddingDate = (weddingDate: string): WeddingDateFormat => {
  const date = new Date(weddingDate);

  // Get day of the week (e.g., "Saturday")
  const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });

  // Get day of the month (e.g., "26")
  const day = date.getDate();

  // Get month name (e.g., "January")
  const month = date.toLocaleDateString('en-US', { month: 'long' });

  // Get time in "HH:MM AM/PM" format
  const time = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return { dayOfWeek, day, month, time };
}