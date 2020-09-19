const queueTime = (customers, n) => {
  if (n === 0 || !customers.length) return 0;
  if (n === 1) return customers.reduce((a, b) => a + b);
  if (n >= customers.length) return Math.max(...customers);

  let checkouts = new Array(n).fill(0);

  customers.forEach(customer => {
    const firstAvailableCheckout = checkouts.indexOf(Math.min(...checkouts));
    checkouts[firstAvailableCheckout] += customer;
  })

  return Math.max(...checkouts);
}