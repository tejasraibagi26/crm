export const isEmpty = (data: any) => {
  const keys = Object.keys(data);
  console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    if (data[keys[i]] == undefined || !data[keys[i]]) {
      throw {
        status: 400,
        message: `${keys[i]} cannot be empty`,
      };
    }
  }
};
