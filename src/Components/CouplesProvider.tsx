import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Couplesdata, getCouples, getEmptyCouples } from '../CouplesData';
import { getCouplesByReference } from '../Utiles';
import Loading from './Loading';

// Create the context
const CouplesContext = createContext<Couplesdata | null>(null);

// Custom hook to use the Couples context
export function useCouples() {
  const context = useContext(CouplesContext);
  if (!context) {
    throw new Error('useCouples must be used within a CouplesProvider');
  }
  return context;
}

// Provider component
export function CouplesProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const reference = queryParams.get('reference'); // Extract referenceId from query parameters

  const [couplesData, setCouplesData] = useState<Couplesdata>(getEmptyCouples); // Initialize as empty couples data
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    const fetchCouplesData = async () => {
      setLoading(true); // Set loading to true before fetching data
      if (reference) {
        try {
          const response = await getCouplesByReference(reference);
          const data = response as Couplesdata;
          
          if (data) {
            setCouplesData(data);
            localStorage.setItem('reference', reference); // Save referenceId to local storage 
          }
        } catch (error) {
          console.error('Error fetching couples data by referenceId:', error);
        }
      } else {
        setCouplesData(getCouples()); // Set default couples data if no referenceId
      }
      setLoading(false); // Set loading to false after fetching data
    };
  
    fetchCouplesData();
  }, [reference]);

  // Show loader if loading
  if (loading) {
    return <Loading />; // Replace with your loader component or animation
  }

  return (
    <CouplesContext.Provider value={couplesData}>
      {children}
    </CouplesContext.Provider>
  );
}
