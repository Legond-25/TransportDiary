import axios from 'axios';
import { showAlert } from './alerts';

export const createRide = async (
  fromPlace,
  fromDate,
  toPlace,
  toDate,
  distance,
  rate,
  quantity
) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/rides',
      data: {
        fromPlace,
        fromDate,
        toPlace,
        toDate,
        distance,
        rate,
        quantity,
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Ride Added Successfully');

      window.setTimeout(() => {
        location.assign('/userDashboard');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
