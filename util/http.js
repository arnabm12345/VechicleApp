import axios from 'axios';

export function StoreMechanicData(formData) {
  axios.post(
    'https://vechicle-app-default-rtdb.firebaseio.com/MechanicData.json',
    formData
  );
}