export const getColor = (pm25) => {
    if (pm25 <= 12) return "green";      // هواء جيد
    if (pm25 <= 35.4) return "orange";   // متوسط
    return "red";                        // سيء
  };