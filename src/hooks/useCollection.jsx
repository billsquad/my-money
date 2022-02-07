import { useEffect, useState } from 'react';
import { projectStorage } from '../firebase/config';

export const useCollection = (collection) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] =  useState(null);

  useEffect(() => {
    let ref = projectStorage.collection(collection);

    const unsub = ref.onSnapshot((snapshot) => {
      let results = [];
      snapshot.docs.forEach(doc => {
        results.push({ ...doc.data(), id: doc.id });
      })

      setDocuments(results);
      setError(null);
    }, (error) => {
      console.log(error);
      setError('Could not fetch the data');
    })

    // unsubscribe on unmount
    return () => unsub();

  }, [collection]);

  return { documents, error };
}