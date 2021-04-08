let tempNumbersList = [];

for (let i = -1000; i <= 1000; i++) {
  tempNumbersList.push(i.toFixed(0));
}

for (let i = 0; i < 2000; i++) {
  tempNumbersList.push(
    Math.random().toFixed(Math.round(Math.random() * 4 + 1))
  );
}

const numbersList = tempNumbersList;
