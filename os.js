export const os = ([param]) => {
  try {
    if (![param]) console.error(" NO PARAMETERS");
    const { userName, homedir } = userInfo();
    const cpuInfo = cpus().map(({ model, speed }) => ({
      model,
      speed: `${speed / 1000}`,
    }));

    const os = {
      "--cpus": cpuInfo,
      "--homedir": homedir,
      "--username": userName,
      "--architecture": arch,
      "--EOL": JSON.stringify(EOL),
    };
    if (!os[param]) console.error(" NO PARAMETERS");
    console.table(os[param]);
    //+= disp cur dir
  } catch (err) {
    console.log(err);
  }
};
