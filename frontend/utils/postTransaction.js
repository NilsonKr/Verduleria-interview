function postTransaction(data) {
  return window.fetch(
    `https://verduleria-api-nilsonkr.vercel.app/transactions/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
}

export default postTransaction;
