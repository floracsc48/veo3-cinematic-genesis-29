
import { useState, useEffect } from 'react';

export const useCodesSettings = () => {
  const [codesEnabled, setCodesEnabled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCodesSettings = async () => {
      try {
        const response = await fetch('/codessettings.txt');
        const text = await response.text();
        const enabled = text.trim().toLowerCase() === 'true';
        setCodesEnabled(enabled);
        console.log('Codes settings loaded:', enabled);
      } catch (error) {
        console.error('Failed to load codes settings:', error);
        setCodesEnabled(false);
      } finally {
        setLoading(false);
      }
    };

    fetchCodesSettings();
  }, []);

  return { codesEnabled, loading };
};
