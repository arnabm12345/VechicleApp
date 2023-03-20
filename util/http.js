import axios from 'axios';

export function MechanicForm(formData) {
  axios.post(
    'https://vechicle-app-default-rtdb.firebaseio.com/',
    formData
  );
}